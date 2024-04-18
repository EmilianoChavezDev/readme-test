import { Logger } from "../../../../support/logger";
import { AccountSettingsMethods } from "../../../pages/account-settings/account-settings.methods";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { CommonPageMethods } from "../../../pages/common-page/common-page.methods";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";

const newPassword = CommonPageMethods.generateRandomString();

describe("Change password", () => {
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

  it("Change user password", () => {
    Logger.stepNumber(3);
    Logger.step("Vamos a los ajustes de la cuenta");
    NavBarMethods.goToMyAccount();

    Logger.stepNumber(4);
    Logger.step("Vamos a Informacion Personal");
    AccountSettingsMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Insertamos la contrasena actual");
    AccountSettingsMethods.insertPassword(LoginData.validCredentials.password);

    cy.wait(2000);

    Logger.stepNumber(6);
    Logger.step("Abrir dropdown de cambio de contraseña");
    AccountSettingsMethods.openDropDownClick();

    cy.wait(4000);

    Logger.stepNumber(7);
    Logger.step("Ingresamos la nueva contraseña");
    AccountSettingsMethods.updateUserPassword(newPassword, newPassword);

    cy.intercept("PUT", CommonPageData.endPoints.password).as("updatePassword");

    Logger.stepNumber(8);
    Logger.step("Guardamos cambios");
    AccountSettingsMethods.saveChangesClick();

    Logger.verification("La contraseña ha sido actualizada");
    AccountSettingsMethods.verifyDataUpdated();

    cy.wait("@updatePassword").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);

      // Vovlemos a cambiar la contraseña a la original
      Logger.stepNumber(9);
      Logger.step("Insertamos la contrasena actual");
      AccountSettingsMethods.insertPassword(newPassword);

      Logger.stepNumber(10);
      Logger.step("Volvemos a cambiar la contraseña a la original");
      AccountSettingsMethods.openDropDownClick();

      Logger.stepNumber(11);
      Logger.step("Ingresamos la nueva contraseña");
      AccountSettingsMethods.updateUserPassword(
        LoginData.validCredentials.password,
        LoginData.validCredentials.password
      );

      Logger.stepNumber(12);
      Logger.step("Guardamos cambios");
      AccountSettingsMethods.saveChangesClick();

      Logger.verification("La contraseña ha sido actualizada");
      AccountSettingsMethods.verifyDataUpdated();
    });
  });
});
