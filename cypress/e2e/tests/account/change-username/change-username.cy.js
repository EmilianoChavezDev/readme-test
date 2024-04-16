import { Logger } from "../../../../support/logger";
import { AccountSettingsElements } from "../../../pages/account-settings/account-settings.elements";
import { AccountSettingsMethods } from "../../../pages/account-settings/account-settings.methods";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { CommonPageMethods } from "../../../pages/common-page/common-page.methods";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";

const newUsername = CommonPageMethods.generateRandomString();

describe("Change username", () => {
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

  it("Change username", () => {
    Logger.stepNumber(3);
    Logger.step("Vamos a los ajustes de la cuenta");
    NavBarMethods.goToMyAccount();

    Logger.stepNumber(4);
    Logger.step("Vamos a Informacion Personal");
    AccountSettingsMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Limpiamos el campo de nombre de usuario");
    AccountSettingsElements.textBoxes.username.clear();

    Logger.stepNumber(6);
    Logger.step("Ponemos el nuevo nombre de usuario");
    AccountSettingsMethods.insertUsername(newUsername);

    Logger.stepNumber(7);
    Logger.step("Insertamos la contrasena actual");
    AccountSettingsMethods.insertPassword(LoginData.validCredentials.password);

    cy.intercept("PUT", CommonPageData.endPoints.username).as("updateUsername");

    Logger.stepNumber(8);
    Logger.step("Guardamos cambios");
    AccountSettingsMethods.saveChangesClick();

    Logger.verification("Username actualizado con exito");
    AccountSettingsMethods.verifyDataUpdated();

    cy.wait("@updateUsername").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    // Volvemos a cambiar el nombre de usuario al anterior
    Logger.stepNumber(9);
    Logger.step("Insertamos la contraseña actual");
    AccountSettingsMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(10);
    Logger.step("Limpiamos el campo de nombre de usuario");
    AccountSettingsElements.textBoxes.username.clear();

    Logger.stepNumber(11);
    Logger.step("Ponemos el nombre de usuario anterior");
    AccountSettingsMethods.insertUsername("gonzatest");

    Logger.stepNumber(12);
    Logger.step("Insertamos la contrasena actual");
    AccountSettingsMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(13);
    Logger.step("Guardamos cambios");
    AccountSettingsMethods.saveChangesClick();

    Logger.verification("Nombre de usuario actualizado con exito");
    AccountSettingsMethods.verifyDataUpdated();
  });
});
