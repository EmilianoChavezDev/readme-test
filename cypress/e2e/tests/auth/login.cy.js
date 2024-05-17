import { Logger } from "../../../support/logger";
import { CommonPageData } from "../../pages/common-page/common-page.data";
import { CommonPageMethods } from "../../pages/common-page/common-page.methods";
import { LoginData } from "../../pages/login/login.data";
import { LoginMethods } from "../../pages/login/login.methods";
import { NavBarMethods } from "../../pages/navbar/navbar.methods";

const randomUsername = CommonPageMethods.generateRandomString();
const randomPassword = CommonPageMethods.generateRandomString(8);

// Login test
describe("Login Test", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Navegamos a la pagina de login");
    cy.visit(CommonPageData.appPages.loginUrl);

    Logger.verification("Estamos en la pagina de login");
    cy.url().should("eq", CommonPageData.appPages.loginUrl);
  });

  it("Correct Login", () => {
    Logger.stepNumber(2);
    Logger.step("Login con datos validos");

    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    Logger.verification("El boton de Escribe del NavBar deberia ser visible");
    NavBarMethods.verifyWriteButton();
  });

  it("Incorrect Login", () => {
    Logger.stepNumber(2);
    Logger.step("Login con datos no validos");
    LoginMethods.login(randomUsername, randomPassword);

    Logger.verification(
      "Invalid email or password"
    );
    LoginMethods.verifyUserOrPasswordNotValid();
  });

  
});
