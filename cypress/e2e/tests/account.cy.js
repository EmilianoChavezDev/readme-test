const { Logger } = require("../../support/logger");
const { AccountData } = require("../pages/account/account.data");
const { AccountMethods } = require("../pages/account/account.methods");
const { CommonPageData } = require("../pages/common-page/common-page.data");
const { LoginData } = require("../pages/login/login.data");
const { LoginMethods } = require("../pages/login/login.methods");
const { NavBarMethods } = require("../pages/navbar/navbar.methods");

describe("My Account Test", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la pagina de login");
    cy.visit(CommonPageData.appPages.login);

    Logger.verification("Estamos en la pagina de login");
    cy.url().should("eq", CommonPageData.appPages.login);

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
    AccountMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Ingresamos una contraseña correcta");
    AccountMethods.inputPassword(LoginData.validCredentials.password);

    Logger.stepNumber(6);
    Logger.step("Cambiamos la foto de perfil");
    AccountMethods.changeUserProfile(AccountData.accountData.profile);

    Logger.stepNumber(7);
    Logger.step("Guardar cambios");
    cy.intercept("PUT", CommonPageData.endPoints.putProfile).as("profile");
    AccountMethods.saveChangesClick();

    Logger.verification(
      "El popup de cambio de foto de perfil deberia ser visible"
    );
    AccountMethods.verifyProfileChanged();

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
    AccountMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Ingresamos la contrase incorrecta");
    AccountMethods.inputPassword("incorrectPassword");

    Logger.stepNumber(6);
    Logger.step("Cambiamos la foto de perfil");
    cy.intercept("PUT", CommonPageData.endPoints.putProfile).as("profile");
    AccountMethods.changeUserProfile(AccountData.accountData.profile);

    Logger.stepNumber(7);
    Logger.step("Guardar cambios");
    AccountMethods.saveChangesClick();

    // Logger.verification("Error message should be visible");
    AccountMethods.verifyIncorrectPassword();

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
    AccountMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Input password");
    AccountMethods.inputPassword(LoginData.validCredentials.password);

    Logger.stepNumber(6);
    Logger.step("Remove user profile picture");
    cy.intercept("POST", CommonPageData.endPoints.postDeleteProfile).as(
      "profile"
    );
    AccountMethods.removeProfilePictureClick();

    Logger.stepNumber(7);
    Logger.step("Save changes");
    AccountMethods.saveChangesClick();

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
    AccountMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Input password");
    AccountMethods.inputPassword(LoginData.validCredentials.password);

    Logger.stepNumber(6);
    Logger.step("Input open dropdown");
    AccountMethods.openDropDownClick();

    Logger.stepNumber(7);
    Logger.step("Input new password");
    AccountMethods.updateUserPassword(
      "asdasdsdasdsadasda",
      AccountData.accountData.newPassword
    );

    Logger.stepNumber(8);
    Logger.step("Save changes");
    AccountMethods.saveChangesClick();
  });
});
