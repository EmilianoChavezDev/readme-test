import { CreateBookData } from "../../../pages/create-book/create-book.data";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";
import { Logger } from "../../../../support/logger";
import { ChaptersData } from "../../../pages/chapters/chapters.data";
import { ChaptersMethods } from "../../../pages/chapters/chapters.methods";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { CreateBookMethods } from "../../../pages/create-book/create-book.methods";

let bookId;
const pdfPath = "cypress/e2e/tests/books/chapters/contenido.pdf";

describe("Upload Pdf", () => {
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

  it("Create a book and upload Pdf for content", () => {
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
      bookId = interception.response.body.id;

      Logger.verification("La url deberia ser la de escribir capitulo");
      cy.url().should(
        "eq",
        `${CommonPageData.appPages.baseUrl}books/${bookId}/chapters/write`
      );

      Logger.stepNumber(5);
      Logger.step("Insertamos el titulo del capitulo");
      ChaptersMethods.insertTitle(ChaptersData.chapterContent.title);

      Logger.stepNumber(6);
      Logger.step("Insertamos el contenido del capitulo subiendo un pdf");
      ChaptersMethods.uploadPdfButtonClick(pdfPath);

      Logger.verification("El contenido del capitulo deberia ser visible");
      ChaptersMethods.verifyPdfUploaded(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      );

      cy.intercept("POST", CommonPageData.endPoints.chapters).as(
        "publishChapter"
      );

      Logger.stepNumber(7);
      Logger.step("Damos click en Publicar");
      ChaptersMethods.publishButtonClick();

      Logger.verification("El capitulo ha sido publicado");
      ChaptersMethods.verifyChapterPublished();

      cy.wait("@publishChapter").then((interception) => {
        expect(interception.response.statusCode).to.equal(201);
      });
    });
  });
});
