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

  it("Report book", () => {
    Logger.stepNumber(3);
    Logger.step("Seleccionamos el libro de novedades");
    HomeMethods.getBook("Libro de prueba");

    Logger.stepNumber(4);
    Logger.step("Click en denunciar libro");
    BookDetailsMethods.reportBookClick();

    Logger.stepNumber(5);
    Logger.step("Insertamos el motivo del reporte");
    BookDetailsMethods.insertReport("Pruebas automatizadas");

    Logger.stepNumber(6);
    Logger.step("Agregamos el motivo");
    BookDetailsMethods.getCategory().other();

    cy.intercept("POST", CommonPageData.endPoints.bookReports).as(
      "createReport"
    );

    Logger.stepNumber(7);
    Logger.step("Click en aceptar");
    BookDetailsMethods.createReportClick();

    Logger.verification("Verificamos que se haya creado el reporte del libro");
    BookDetailsMethods.verifyReportCreated();

    cy.wait("@createReport").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  });
});
