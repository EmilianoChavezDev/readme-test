import { Logger } from "../../../support/logger";
import { BookDetailsMethods } from "../../pages/book-details/book-details.methods";
import { CommonPageData } from "../../pages/common-page/common-page.data";
import { LoginData } from "../../pages/login/login.data";
import { LoginMethods } from "../../pages/login/login.methods";
import { NavBarSearchMethods } from "../../pages/navbar-search/navbar-search.methods";
import { NavBarMethods } from "../../pages/navbar/navbar.methods";
import { ReadChapterMethods } from "../../pages/read-chapter/read-chapter.methods";

describe("Search navbar test", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la pagina de login");
    cy.visit(CommonPageData.appPages.loginUrl);

    Logger.verification("Verificar que se encuentre en la pagina de login");
    cy.url().should("eq", CommonPageData.appPages.loginUrl);

    Logger.stepNumber(2);
    Logger.step("Login con usuario valido");
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    Logger.verification("El boton Escribe del navbar debe estar presente");
    NavBarMethods.verifyWriteButton();
  });

  it("Search existing book", () => {
    Logger.stepNumber(3);
    Logger.step("Buscar el libro Spiderman");
    NavBarMethods.searchBook("Spiderman");

    Logger.verification("Verificar que se hizo la busqueda correctamente");
    NavBarSearchMethods.verifySearchResults("Spiderman");

    Logger.verification("Verificamos que hayan resultados en la busqueda");
    NavBarSearchMethods.verifyResults();
  });

  it("Search book that doesnt exist", () => {
    Logger.stepNumber(3);
    Logger.step("Buscar el libro Spiderman");
    NavBarMethods.searchBook("Libro no existe");

    Logger.verification("Verificar que se hizo la busqueda correctamente");
    NavBarSearchMethods.verifySearchResults("Libro no existe");

    Logger.verification("Verificamos que hayan resultados en la busqueda");
    NavBarSearchMethods.verifyResultsNotFound();
  });

  it("Search book per reviews", () => {
    Logger.stepNumber(3);
    Logger.step("Buscar un libro cualquiera");
    NavBarMethods.searchBook("a");

    Logger.verification("Verificar que se hizo la busqueda correctamente");
    NavBarSearchMethods.verifySearchResults("a");

    Logger.stepNumber(4);
    Logger.step("Le damos una calificacion de 5 estrellas al libro");
    NavBarSearchMethods.giveStars().fiveStarReview();

    Logger.stepNumber(5);
    Logger.step("Damos click en aplicar filtros");
    NavBarSearchMethods.applyReviewsClick();

    Logger.verification("Verificamos que hayan resultados en la busqueda");
    NavBarSearchMethods.verifyResults();
  });

  it("Search book per category", () => {
    Logger.stepNumber(3);
    Logger.step("Buscar un libro cualquiera");
    NavBarMethods.searchBook("a");

    Logger.verification("Verificar que se hizo la busqueda correctamente");
    NavBarSearchMethods.verifySearchResults("a");

    Logger.stepNumber(4);
    Logger.step("Le damos click al input");
    NavBarSearchMethods.selectInputClick();

    Logger.stepNumber(5);
    Logger.step("Damos click en la categoria de ficcion");
    NavBarSearchMethods.addCategory().fiction();

    Logger.stepNumber(6);
    Logger.step("Damos click en aplicar filtros");
    NavBarSearchMethods.applyReviewsClick();

    Logger.verification("Verificamos que hayan resultados en la busqueda");
    NavBarSearchMethods.verifyResults();
  });

  it("Search book per category and reviews", () => {
    Logger.stepNumber(3);
    Logger.step("Buscar un libro cualquiera");
    NavBarMethods.searchBook("a");

    Logger.verification("Verificar que se hizo la busqueda correctamente");
    NavBarSearchMethods.verifySearchResults("a");

    Logger.stepNumber(4);
    Logger.step("Borramos el input de busqueda");
    NavBarMethods.clearInput();

    Logger.stepNumber(4);
    Logger.step("Le damos click al select");
    NavBarSearchMethods.selectInputClick();

    Logger.stepNumber(5);
    Logger.step("Damos click en la categoria de ficcion");
    NavBarSearchMethods.addCategory().fantasy();

    Logger.stepNumber(6);
    Logger.step("Le damos una calificacion de 5 estrellas al libro");
    NavBarSearchMethods.giveStars().fiveStarReview();

    Logger.stepNumber(6);
    Logger.step("Damos click en aplicar filtros");
    NavBarSearchMethods.applyReviewsClick();

    Logger.verification("Verificamos que haya encontrado el libro");
    NavBarSearchMethods.verifyBooks("Como ser un alcoholico");

    Logger.verification("Verificamos que hayan resultados en la busqueda");
    NavBarSearchMethods.verifyResults();
  });

  it("Search book and view details", () => {
    Logger.stepNumber(3);
    Logger.step("Buscar un libro cualquiera");
    NavBarMethods.searchBook("Spiderman");

    Logger.verification("Verificar que se hizo la busqueda correctamente");
    NavBarSearchMethods.verifySearchResults("Spiderman");

    Logger.stepNumber(4);
    Logger.step("Verificamos que haya resultados en la busqueda");
    NavBarSearchMethods.verifyResults();

    Logger.stepNumber(5);
    Logger.step("Damos click en ver detalles del libro");
    NavBarSearchMethods.viewDetails();

    Logger.verification(
      "Verificamos que se haya redirigido a la pagina de detalles"
    );

    BookDetailsMethods.verifyComentarySection();
  });

  //TODO: Fix this book with no chapters
  it("Search book and add read book with capitules", () => {
    Logger.stepNumber(3);
    Logger.step("Buscar un libro cualquiera");
    NavBarMethods.searchBook("Spiderman");

    Logger.verification("Verificar que se hizo la busqueda correctamente");
    NavBarSearchMethods.verifySearchResults("Spiderman");

    Logger.stepNumber(4);
    Logger.step("Verificamos que haya resultados en la busqueda");
    NavBarSearchMethods.verifyResults();

    Logger.stepNumber(5);
    Logger.step("Damos click en leer libro");
    NavBarSearchMethods.readBook();

    Logger.verification("Verificamos que tenga capitulos");

    BookDetailsMethods.verifyComentarySection();
  });

  it("Search book and add read book with no capitules", () => {
    Logger.stepNumber(3);
    Logger.step("Buscar un libro cualquiera");
    NavBarMethods.searchBook("Spiderman");

    Logger.verification("Verificar que se hizo la busqueda correctamente");
    NavBarSearchMethods.verifySearchResults("Spiderman");

    Logger.stepNumber(4);
    Logger.step("Verificamos que haya resultados en la busqueda");
    NavBarSearchMethods.verifyResults();

    Logger.stepNumber(5);
    Logger.step("Damos click en leer libro");
    NavBarSearchMethods.readBook();

    Logger.verification("Verificamos el mensaje que no hay capitulos");

    ReadChapterMethods.verifyEmptyCapitule();
  });
});
