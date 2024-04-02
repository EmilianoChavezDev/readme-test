import { Logger } from "../../../support/logger";
import { AccountSettingsData } from "../../pages/account-settings/account-settings.data";
import { AccountSettingsMethods } from "../../pages/account-settings/account-settings.methods";
import { CommonPageData } from "../../pages/common-page/common-page.data";
import { LoginData } from "../../pages/login/login.data";
import { LoginMethods } from "../../pages/login/login.methods";
import { NavBarMethods } from "../../pages/navbar/navbar.methods";

describe("Change password doesnt match", () => {
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

  it("Change user password not match", () => {
    Logger.stepNumber(3);
    Logger.step("Vamos a los ajustes de la cuenta");
    NavBarMethods.goToMyAccount();

    Logger.stepNumber(4);
    Logger.step("Vamos a Informacion Personal");
    AccountSettingsMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Insertamos la contrasena actual");
    AccountSettingsMethods.inputPassword(LoginData.validCredentials.password);

    Logger.stepNumber(6);
    Logger.step("Abrir dropdown de cambio de contraseña");
    AccountSettingsMethods.openDropDownClick();

    Logger.stepNumber(7);
    Logger.step("Ingresamos la nueva contraseña");
    AccountSettingsMethods.updateUserPassword(
      "incorrectPasswrod",
      AccountSettingsData.accountData.newPassword
    );

    cy.intercept("PUT", CommonPageData.endPoints.password).as("updatePassword");

    Logger.stepNumber(8);
    Logger.step("Guardamos cambios");
    AccountSettingsMethods.saveChangesClick();

    Logger.verification("La contraseña no ha sido actualizada");
    AccountSettingsMethods.verifyPasswordsDontMatch();

    cy.wait("@updatePassword").then((interception) => {
      expect(interception.response.statusCode).to.eq(422);
    });
  });
});
