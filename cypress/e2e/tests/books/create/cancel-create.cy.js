import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";
import { Logger } from "../../../../support/logger";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { CreateBookMethods } from "../../../pages/create-book/create-book.methods";

describe("Cancel create book", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Navegamos a la pagina de login");
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

  it("Redirect to home page when 'Cancelar' button is clicked", () => {
    // En el navbar damos click en Escribe y es Crear nuevo libro
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Crear libro nuevo del navbar");
    NavBarMethods.goToWriteBook();

    // Verificamos que la url sea de creacion de libro
    Logger.verification("La url deberia ser la de creacion de libro");
    cy.url().should("eq", CommonPageData.appPages.baseUrl + "books/create");

    // Hacemos click en el boton de cancelar
    Logger.stepNumber(4);
    Logger.step("Damos click en Cancelar");
    CreateBookMethods.cancelButtonClick();

    // Verificamos que la url sea la misma
    Logger.verification("La url deberia ser la misma que la de home");
    cy.url().should("eq", CommonPageData.appPages.baseUrl);
  });
});
