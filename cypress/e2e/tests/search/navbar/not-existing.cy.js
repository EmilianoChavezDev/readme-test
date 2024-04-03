import { Logger } from "../../../../support/logger";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarSearchMethods } from "../../../pages/navbar-search/navbar-search.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";

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

  it("Search book that doesnt exist", () => {
    Logger.stepNumber(3);
    Logger.step("Buscar el libro Spiderman");
    NavBarMethods.searchBook("Libro no existe");

    Logger.verification("Verificar que se hizo la busqueda correctamente");
    NavBarSearchMethods.verifySearchResults("Libro no existe");

    Logger.verification("Verificamos que hayan resultados en la busqueda");
    NavBarSearchMethods.verifyResultsNotFound();
  });
});
