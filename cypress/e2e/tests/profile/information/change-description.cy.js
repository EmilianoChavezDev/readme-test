import { Logger } from "../../../../support/logger";
import { AccountSettingsMethods } from "../../../pages/account-settings/account-settings.methods";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { CommonPageMethods } from "../../../pages/common-page/common-page.methods";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";
import { ProfileSettingsMethods } from "../../../pages/profile-settings/profile-settings.methods";

const newDescription = CommonPageMethods.generateRandomString(5);

describe("Change description", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la pagina de login");
    cy.visit(CommonPageData.appPages.loginUrl);

    Logger.verification("Estamos en la pagina de login");
    cy.url().should("eq", CommonPageData.appPages.loginUrl);

    Logger.stepNumber(2);
    Logger.step("Login con datos validos");
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    Logger.verification("El boton de Escribe del NavBar deberia ser visible");
    NavBarMethods.verifyWriteButton();
  });

  it("Change user description", () => {
    Logger.stepNumber(3);
    Logger.step("Vamos a los ajustes de la cuenta");
    NavBarMethods.goToMyProfile();

    Logger.stepNumber(5);
    Logger.step("Damos click en editar perfil");
    ProfileSettingsMethods.editProfileClick();

    Logger.verification("Verificamos que estemos en modo edicion");
    ProfileSettingsMethods.verifyEditProfilePage();

    Logger.stepNumber(5);
    Logger.step("Ingresamos el nuevo nombre");
    ProfileSettingsMethods.inputDescription(
      `Esta es una nueva descripcion${newDescription}`
    );

    cy.intercept("PUT", CommonPageData.endPoints.information).as(
      "updateDescription"
    );

    Logger.stepNumber(6);
    Logger.step("Guardamos cambios");
    ProfileSettingsMethods.saveChangesClick();

    Logger.verification("La fecha de nacimiento ha sido actualizada");
    AccountSettingsMethods.verifyDataUpdated();

    cy.wait("@updateDescription").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  });
});
