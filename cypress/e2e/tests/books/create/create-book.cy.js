import { CreateBookData } from "../../../pages/create-book/create-book.data";
import { CreateBookMethods } from "../../../pages/create-book/create-book.methods";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";
import { Logger } from "../../../../support/logger";
import { CommonPageData } from "../../../pages/common-page/common-page.data";

describe("Create book", () => {
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

  it("Create book", () => {
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Crear libro nuevo del navbar");
    NavBarMethods.goToWriteBook();

    Logger.verification("La url deberia ser la de creacion de libro");
    cy.url().should("eq", `${CommonPageData.appPages.baseUrl}books/create`);

    Logger.stepNumber(4);
    Logger.step("Llenamos el formulario y damos click en Seguir");
    cy.intercept("POST", CommonPageData.endPoints.books).as("createBook");

    CreateBookMethods.createBook(
      CreateBookData.bookData.title,
      CreateBookData.bookData.synopsis,
      CreateBookData.bookData.category,
      CreateBookData.bookData.cover
    );

    cy.wait("@createBook").then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
    });
  });
});
