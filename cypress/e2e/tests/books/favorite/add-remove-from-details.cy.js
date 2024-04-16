import { Logger } from "../../../../support/logger";
import { BookDetailsMethods } from "../../../pages/book-details/book-details.methods";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { HomeMethods } from "../../../pages/home/home.methods";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";

describe("Add Book to favorite", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Navegamos a la pagina de login");
    cy.visit(CommonPageData.appPages.loginUrl);

    Logger.verification("Estamos en la pagina de login");
    cy.url().should("eq", CommonPageData.appPages.loginUrl);

    Logger.stepNumber(2);
    Logger.step("Login con credenciales validas");
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    Logger.verification("NavBar button Escribe should be visible");
    NavBarMethods.verifyWriteButton();
  });

  it("Add and remove book from the books details", () => {
    Logger.stepNumber(3);
    Logger.step("Seleccionamos el primer libro de novedades");
    HomeMethods.getBook("Libro de prueba");

    cy.intercept("POST", CommonPageData.endPoints.favorites).as("addFavorite");

    Logger.stepNumber(4);
    Logger.step("Agregar el libro a favoritos desde los detalles del libro");
    BookDetailsMethods.addFavoriteClick();

    cy.wait("@addFavorite").then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
    });

    Logger.verification("Verificamos el mensaje de agregado a favoritos");
    BookDetailsMethods.verifyFavoriteAddedMessage();

    Logger.stepNumber(8);
    Logger.step("Removemos el libro de favoritos desde los detalles del libro");
    BookDetailsMethods.removeFavoriteClick();

    Logger.verification("El libro no deberia ser visible en favoritos");
    BookDetailsMethods.verifyFavoriteRemovedMessage();
  });
});
