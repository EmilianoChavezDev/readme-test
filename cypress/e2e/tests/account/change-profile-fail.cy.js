import { Logger } from "../../../support/logger";
import { AccountSettingsData } from "../../pages/account-settings/account-settings.data";
import { AccountSettingsMethods } from "../../pages/account-settings/account-settings.methods";
import { CommonPageData } from "../../pages/common-page/common-page.data";
import { LoginData } from "../../pages/login/login.data";
import { LoginMethods } from "../../pages/login/login.methods";
import { NavBarMethods } from "../../pages/navbar/navbar.methods";

describe("Change profile fail", () => {
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

  it("Change user profile with incorrect password", () => {
    Logger.stepNumber(3);
    Logger.step("Vamos a los ajustes de la cuenta");
    NavBarMethods.goToMyAccount();

    Logger.stepNumber(4);
    Logger.step("Vamos a Informacion Personal");
    AccountSettingsMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Ingresamos la contraseña incorrecta");
    AccountSettingsMethods.inputPassword("incorrectPassword");

    Logger.stepNumber(6);
    Logger.step("Cambiamos la foto de perfil");
    AccountSettingsMethods.changeUserProfile(
      AccountSettingsData.accountData.profile
    );

    cy.intercept("PUT", CommonPageData.endPoints.profile).as("profile");
    Logger.stepNumber(7);
    Logger.step("Guardar cambios");
    AccountSettingsMethods.saveChangesClick();

    // Logger.verification("Error message should be visible");
    AccountSettingsMethods.verifyIncorrectPassword();

    cy.wait("@profile").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.equal(422);
    });
  });
});
