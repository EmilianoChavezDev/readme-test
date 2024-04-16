import { Logger } from "../../../../support/logger";
import { AccountSettingsData } from "../../../pages/account-settings/account-settings.data";
import { AccountSettingsMethods } from "../../../pages/account-settings/account-settings.methods";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";
import { ProfileSettingsMethods } from "../../../pages/profile-settings/profile-settings.methods";

describe("Remove profile", () => {
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

  it("Remove user profile", () => {
    Logger.stepNumber(3);
    Logger.step("Vamos a los ajustes de la cuenta");
    NavBarMethods.goToMyProfile();

    Logger.stepNumber(4);
    Logger.step("Damos click en editar perfil");
    ProfileSettingsMethods.editProfileClick();

    Logger.verification("Verificamos que estemos en modo edicion");
    ProfileSettingsMethods.verifyEditProfilePage();

    Logger.stepNumber(5);
    Logger.step("Ingresamos la foto de perfil");
    ProfileSettingsMethods.changeProfilePicture(
      AccountSettingsData.accountData.profile
    );

    cy.intercept("PUT", CommonPageData.endPoints.profile).as("changeProfile");

    Logger.stepNumber(6);
    Logger.step("Guardamos cambios");
    ProfileSettingsMethods.saveChangesClick();

    Logger.verification("Datos guardados correctamente");
    AccountSettingsMethods.verifyDataUpdated();

    cy.wait("@changeProfile").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });

    Logger.stepNumber(7);
    Logger.step("Damos click en editar perfil");
    ProfileSettingsMethods.editProfileClick();

    Logger.verification("Verificamos que estemos en modo edicion");
    ProfileSettingsMethods.verifyEditProfilePage();

    Logger.stepNumber(8);
    Logger.step("Damos click en eliminar foto de perfil");
    ProfileSettingsMethods.removeProfilePictureClick();

    cy.intercept("POST", CommonPageData.endPoints.deleteProfile).as(
      "deleteProfile"
    );

    Logger.stepNumber(9);
    Logger.step("Guardamos cambios");
    ProfileSettingsMethods.saveChangesClick();

    Logger.verification("Datos guardados correctamente");
    AccountSettingsMethods.verifyDataUpdated();

    cy.wait("@deleteProfile").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });
});
