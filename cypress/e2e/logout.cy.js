const { Logger } = require("../support/logger");
const { CommonPageData } = require("./pages/common-page/common-page.data");
const { LoginData } = require("./pages/login/login.data");
const { LoginMethods } = require("./pages/login/login.methods");
const { NavBarMethods } = require("./pages/navbar/navbar.methods");

describe("Logout", () => {
  it("should logout", () => {
    Logger.stepNumber(1);
    Logger.step("Navegamos a la pagina de login");
    cy.visit(CommonPageData.appPages.login);

    Logger.stepNumber(2);
    Logger.step("Login con datos validos");
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    Logger.verification("El boton de Escribe del NavBar deberia ser visible");
    NavBarMethods.verifyWriteButton();

    Logger.stepNumber(3);
    Logger.step("Logout");
    NavBarMethods.goToLogout();

    Logger.verification("Deberiamos estar en la pagina de login");
    cy.url().should("eq", CommonPageData.appPages.login);
  });
});
