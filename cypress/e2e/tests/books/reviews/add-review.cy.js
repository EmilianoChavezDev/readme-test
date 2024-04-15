import { Logger } from "../../../../support/logger";
import { BookDetailsMethods } from "../../../pages/book-details/book-details.methods";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";

describe("Reviews", () => {
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

  it("Add review", () => {
    // Damos click en el primer libro
    Logger.stepNumber(3);
    Logger.step("Seleccionamos el primer libro de novedades");
    cy.get("div.bg-gradient-to-t").eq(12).click();

    // Verificamos que la seccion de comentarios este presente
    Logger.verification("La seccion de comentarios deberia estar presente");
    BookDetailsMethods.verifyComentarySection();

    cy.intercept(CommonPageData.endPoints.reviews, "POST").as("postReview");

    // Agregamos una reseña
    Logger.stepNumber(4);
    Logger.step("Agregamos una reseña de 5 estrellas");
    BookDetailsMethods.giveStars().fiveStarReview();

    cy.wait("@postReview").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });
});
