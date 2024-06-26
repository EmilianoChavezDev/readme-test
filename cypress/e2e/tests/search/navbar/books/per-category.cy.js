import { Logger } from "../../../../../support/logger";
import { CommonPageData } from "../../../../pages/common-page/common-page.data";
import { LoginData } from "../../../../pages/login/login.data";
import { LoginMethods } from "../../../../pages/login/login.methods";
import { NavBarSearchMethods } from "../../../../pages/navbar-search/navbar-search.methods";
import { NavBarMethods } from "../../../../pages/navbar/navbar.methods";

describe("Search navbar", () => {
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

  it("Search book per category", () => {
    Logger.stepNumber(3);
    Logger.step("Buscar un libro cualquiera");
    NavBarMethods.searchBook("a");

    Logger.verification("Verificar que se hizo la busqueda correctamente");
    NavBarSearchMethods.verifySearch("a");

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
});
