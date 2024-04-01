const { Logger } = require("../../support/logger");
const { CommonPageData } = require("../pages/common-page/common-page.data");
const {
  CreateBookMethods,
} = require("../pages/create-book/create-book.methods");
const { EditBookData } = require("../pages/edit-book/edit-book.data");
const { EditBookMethods } = require("../pages/edit-book/edit.book.methods");
const { LoginData } = require("../pages/login/login.data");
const { LoginMethods } = require("../pages/login/login.methods");
const { MyBooksMethods } = require("../pages/mybooks/mybooks.methods");
const { NavBarMethods } = require("../pages/navbar/navbar.methods");

let bookId;

describe("Edit book test", () => {
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

  it("Edit book info", () => {
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Mis Libros");
    NavBarMethods.goToMyBooks();

    Logger.verification("La url deberia ser la de mis libros");

    cy.url().should("eq", CommonPageData.appPages.baseUrl + "books/mybooks");

    Logger.stepNumber(4);
    Logger.step("Desplegamos el menu de opciones");
    MyBooksMethods.openMenu();

    Logger.stepNumber(5);
    Logger.step("Click en Editar libro");
    MyBooksMethods.editBook();

    // Esperar a que la URL cambie a la pagina de edicion del libro
    cy.url()
      .should("include", "/books/edit/")
      .then((url) => {
        bookId = url.split("/").pop();

        Logger.stepNumber(6);
        Logger.step("Limpiamos el campo de titulo");
        EditBookMethods.clearTitle();

        Logger.stepNumber(7);
        Logger.step("Limpiamos el campo de sinopsis");
        EditBookMethods.clearSynopsis();

        // Verificamos que la url sea la de editar el libro
        Logger.verification("Verificamos que estemos en la pagina de edicion");
        cy.url().should(
          "eq",
          `${CommonPageData.appPages.baseUrl}+books/edit/${bookId}`
        );

        // Interceptamos la peticion PUT con el id del libro
        cy.intercept("PUT", `${CommonPageData.endPoints.books}/${bookId}`).as(
          "updateBook"
        );
        Logger.stepNumber(8);
        Logger.step("Actualizamos el libro");
        EditBookMethods.editBook(
          EditBookData.bookData.title,
          EditBookData.bookData.synopsis,
          EditBookData.bookData.category,
          EditBookData.bookData.cover
        );

        cy.wait("@updateBook").then((interception) => {
          expect(interception.response.statusCode).to.eq(200);
        });

        Logger.verification("Verificamos que el libro se haya actualizado");
        cy.url().should(
          "eq",
          CommonPageData.appPages.baseUrl + "books" + bookId
        );
      });
  });

  it("Edit book info empty fields validations", () => {
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Mis Libros");
    NavBarMethods.goToMyBooks();

    Logger.verification("La url deberia ser la de mis libros");
    cy.url().should("eq", CommonPageData.appPages.baseUrl + "books/mybooks");

    Logger.stepNumber(4);
    Logger.step("Desplegamos el menu de opciones");
    MyBooksMethods.openMenu();

    Logger.stepNumber(5);
    Logger.step("Click en Editar libro");
    MyBooksMethods.editBook();

    // Esperar a que la URL cambie a la pagina de edicion del libro
    cy.url()
      .should("include", "/books/edit/")
      .then((url) => {
        Logger.stepNumber(6);
        Logger.step("Limpiamos el campo de titulo");
        EditBookMethods.clearTitle();

        Logger.stepNumber(7);
        Logger.step("Limpiamos el campo de sinopsis");
        EditBookMethods.clearSynopsis();

        // Verificamos que la url sea la de editar el libro
        Logger.verification("Verificamos que estemos en la pagina de edicion");
        cy.url().should(
          "eq",
          `${CommonPageData.appPages.baseUrl}+books/edit/${bookId}`
        );

        Logger.stepNumber(8);
        Logger.step("Actualizamos el libro");
        EditBookMethods.updateBookClick();

        Logger.verification("Verificamos que no puede haber campos vacios");
        CreateBookMethods.verifyEmptyTitleError();
        CreateBookMethods.verifyEmptySynopsisError();
      });
  });
});
