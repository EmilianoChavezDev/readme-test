import { LoginData } from "./pages/login/login.data";
import { LoginElements } from "./pages/login/login.elements";
import { LoginMethods } from "./pages/login/login.methods";

// Test correct login
describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("https://test--readme-test.netlify.app/auth/login");
  });

  it("Correct Login", () => {
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    cy.get("nav.relative div").eq(0).should("be.visible");
  });

  it("Incorrect Login", () => {
    LoginMethods.login(
      LoginData.invalidCredentials.username,
      LoginData.invalidCredentials.password
    );

    cy.contains("p", "Usuario o contraseña no valido").should("be.visible");
  });

  it("Empty Fields", () => {
    LoginMethods.clickLoginButton();

    LoginElements.textBoxes.username
      .focused()
      .should("have.attr", "name", "username");
  });
});
