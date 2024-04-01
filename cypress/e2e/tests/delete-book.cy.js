const { Logger } = require("../../support/logger");
const { CommonPageData } = require("../pages/common-page/common-page.data");
const { LoginData } = require("../pages/login/login.data");
const { LoginMethods } = require("../pages/login/login.methods");
const { MyBooksMethods } = require("../pages/mybooks/mybooks.methods");
const { NavBarMethods } = require("../pages/navbar/navbar.methods");

describe("Delete Book test", () => {
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

  it("Delete book", () => {
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Mis Libros");
    NavBarMethods.goToMyBooks();

    Logger.verification(
      "La url deberia ser la misma que la de creacion de libro"
    );
    cy.url().should("eq", CommonPageData.appPages.myBooksUrl);

    Logger.stepNumber(4);
    Logger.step("Desplegamos el menu de opciones");
    MyBooksMethods.openMenu();

    Logger.stepNumber(5);
    Logger.step("Click en Eliminar libro");
    MyBooksMethods.deleteBook();

    Logger.stepNumber(6);
    Logger.step("Click en confirmar eliminar libro");
    MyBooksMethods.confirmDeleteBook();

    Logger.verification("El mensaje de exito deberia ser visible");
    MyBooksMethods.verifyBookDeleted();
  });
});
