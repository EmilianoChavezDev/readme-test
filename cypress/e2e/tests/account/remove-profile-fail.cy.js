import { Logger } from "../../../support/logger";
import { AccountSettingsMethods } from "../../pages/account-settings/account-settings.methods";
import { CommonPageData } from "../../pages/common-page/common-page.data";
import { LoginData } from "../../pages/login/login.data";
import { LoginMethods } from "../../pages/login/login.methods";
import { NavBarMethods } from "../../pages/navbar/navbar.methods";

describe("Remove profile fail", () => {
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

  it("Remove user profile picture with invalid password", () => {
    Logger.stepNumber(3);
    Logger.step("");
    NavBarMethods.goToMyAccount();

    Logger.stepNumber(4);
    Logger.step("Go to user profile");
    AccountSettingsMethods.myAccountClick();

    Logger.stepNumber(5);
    Logger.step("Input password");
    AccountSettingsMethods.inputPassword("incorrectPassword");

    Logger.stepNumber(6);
    Logger.step("Remove user profile picture");
    cy.intercept("POST", CommonPageData.endPoints.deleteProfile).as("profile");
    AccountSettingsMethods.removeProfilePictureClick();

    Logger.stepNumber(7);
    Logger.step("Save changes");
    AccountSettingsMethods.saveChangesClick();

    Logger.verification("Mensaje de contraseña incorrecta deberia ser visible");
    AccountSettingsMethods.verifyIncorrectPassword();

    cy.wait("@profile").then((interception) => {
      expect(interception.response.statusCode).to.equal(422);
    });
  });
});
