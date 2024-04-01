const { Logger } = require("../../support/logger");
const {
  AccountSettingsData,
} = require("../pages/account-settings/account-settings.data");
const {
  AccountSettingsMethods,
} = require("../pages/account-settings/account-settings.methods");
const { CommonPageData } = require("../pages/common-page/common-page.data");
const { LoginData } = require("../pages/login/login.data");
const { LoginMethods } = require("../pages/login/login.methods");
const { NavBarMethods } = require("../pages/navbar/navbar.methods");

//TODO: Fixes
describe("My Account Test", () => {
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

  it("Change user profile with correct password", () => {
    Logger.stepNumber(3);
    Logger.step("Vamos a los ajustes de la cuenta");
    NavBarMethods.goToMyAccount();

    Logger.stepNumber(4);
    Logger.step("Vamos a Informacion Personal");
    AccountSettingsMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Ingresamos una contraseña correcta");
    AccountSettingsMethods.inputPassword(LoginData.validCredentials.password);

    Logger.stepNumber(6);
    Logger.step("Cambiamos la foto de perfil");
    AccountSettingsMethods.changeUserProfile(
      AccountSettingsData.accountData.profile
    );

    Logger.stepNumber(7);
    Logger.step("Guardar cambios");
    cy.intercept("PUT", CommonPageData.endPoints.putProfile).as("profile");
    AccountSettingsMethods.saveChangesClick();

    Logger.verification(
      "El popup de cambio de foto de perfil deberia ser visible"
    );
    AccountSettingsMethods.verifyProfileChanged();

    cy.wait("@profile").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it("Change user profile with incorrect password", () => {
    Logger.stepNumber(3);
    Logger.step("Vamos a los ajustes de la cuenta");
    NavBarMethods.goToMyAccount();

    Logger.stepNumber(4);
    Logger.step("Vamos a Informacion Personal");
    AccountSettingsMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Ingresamos la contrase incorrecta");
    AccountSettingsMethods.inputPassword("incorrectPassword");

    Logger.stepNumber(6);
    Logger.step("Cambiamos la foto de perfil");
    cy.intercept("PUT", CommonPageData.endPoints.putProfile).as("profile");
    AccountSettingsMethods.changeUserProfile(
      AccountSettingsData.accountData.profile
    );

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

  it("Remove user profile picture with valid password", () => {
    Logger.stepNumber(3);
    Logger.step("Go to account page");
    NavBarMethods.goToMyAccount();

    Logger.stepNumber(4);
    Logger.step("Go to user profile");
    AccountSettingsMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Input password");
    AccountSettingsMethods.inputPassword(LoginData.validCredentials.password);

    Logger.stepNumber(6);
    Logger.step("Remove user profile picture");
    cy.intercept("POST", CommonPageData.endPoints.postDeleteProfile).as(
      "profile"
    );
    AccountSettingsMethods.removeProfilePictureClick();

    Logger.stepNumber(7);
    Logger.step("Save changes");
    AccountSettingsMethods.saveChangesClick();

    cy.wait("@profile").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it("Change user password", () => {
    Logger.stepNumber(3);
    Logger.step("Go to account page");
    NavBarMethods.goToMyAccount();

    Logger.stepNumber(4);
    Logger.step("Go to user profile");
    AccountSettingsMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Input password");
    AccountSettingsMethods.inputPassword(LoginData.validCredentials.password);

    Logger.stepNumber(6);
    Logger.step("Input open dropdown");
    AccountSettingsMethods.openDropDownClick();

    Logger.stepNumber(7);
    Logger.step("Input new password");
    AccountSettingsMethods.updateUserPassword(
      "asdasdsdasdsadasda",
      AccountSettingsData.accountData.newPassword
    );

    Logger.stepNumber(8);
    Logger.step("Save changes");
    AccountSettingsMethods.saveChangesClick();
  });
});
