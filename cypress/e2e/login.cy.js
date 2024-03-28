import { Logger } from "../support/logger";
import { LoginData } from "./pages/login/login.data";
import { LoginMethods } from "./pages/login/login.methods";
import { NavBarMethods } from "./pages/navbar/navbar.methods";

// Login test
describe("Login Test", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Visit the login page");
    cy.visit("https://test--readme-test.netlify.app/auth/login");
  });

  it("Correct Login", () => {
    Logger.stepNumber(2);
    Logger.step("Login with valid credentials");
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    Logger.verification("The Escribe button is displayed after login");
    NavBarMethods.verifyWriteButton();
  });

  it("Incorrect Login", () => {
    Logger.stepNumber(2);
    Logger.step("Login with invalid credentials");
    LoginMethods.login(
      LoginData.invalidCredentials.username,
      LoginData.invalidCredentials.password
    );

    Logger.verification("The user is entering the incorrect credentials");
    LoginMethods.verifyUserOrPasswordNotValid();
  });

  it("Empty Fields", () => {
    Logger.stepNumber(2);
    Logger.step("Login with empty fields");
    LoginMethods.clickLoginButton();

    Logger.verification("The user is entering empty fields");
    LoginMethods.verifyUsernameEmptyField();
    LoginMethods.verifyPasswordEmptyField();
  });
});
