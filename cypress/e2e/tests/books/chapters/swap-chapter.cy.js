import { CreateBookData } from "../../../pages/create-book/create-book.data";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";
import { Logger } from "../../../../support/logger";
import { ChaptersData } from "../../../pages/chapters/chapters.data";
import { ChaptersMethods } from "../../../pages/chapters/chapters.methods";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { CreateBookMethods } from "../../../pages/create-book/create-book.methods";
import { MyBooksMethods } from "../../../pages/mybooks/mybooks.methods";

let bookId;

//TODO: Fix drag and drop
describe("Swap chapter", () => {
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

  it("Create book and save chapter", () => {
    // Vamos al boton crear libro
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Crear libro nuevo del navbar");
    NavBarMethods.goToWriteBook();

    // Verificamos que la url sea de creacion de libro
    Logger.verification("La url deberia ser la de creacion de libro");
    cy.url().should("eq", CommonPageData.appPages.baseUrl + "books/create");

    // Interceptamos la peticion para simular que se creo el libro
    Logger.stepNumber(4);
    Logger.step("Llenamos el formulario y damos click en Seguir");
    cy.intercept("POST", CommonPageData.endPoints.books).as("createBook");

    // Metodo para crear un libro y enviar la peticion
    CreateBookMethods.createBook(
      CreateBookData.bookData.title,
      CreateBookData.bookData.synopsis,
      CreateBookData.bookData.category,
      CreateBookData.bookData.cover
    );

    // Esperamos a que la peticion se complete
    cy.wait("@createBook").then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
      bookId = interception.response.body.id;

      // Verificamos que estemos en la pagina de publicar capitulos
      Logger.verification("La url deberia ser la de escribir capitulo");
      cy.url().should(
        "eq",
        `${CommonPageData.appPages.baseUrl}books/${bookId}/chapters/write`
      );

      // Insertamos el titulo
      Logger.stepNumber(5);
      Logger.step("Insertamos el titulo del capitulo");
      ChaptersMethods.insertTitle(ChaptersData.chapterContent.title);

      // Insertamos el contenido del capitulo
      Logger.stepNumber(6);
      Logger.step("Insertamos el contenido del capitulo");
      ChaptersMethods.insertContent(ChaptersData.chapterContent.content);

      // Interceptamos la peticion
      cy.intercept("POST", CommonPageData.endPoints.chapters).as("saveChapter");

      // Publicamos el capitulo
      Logger.stepNumber(7);
      Logger.step("Damos click en Publicar");
      ChaptersMethods.saveButtonClick();

      //Verficamos el mensaje que se publico el capitulo
      Logger.verification("El capitulo ha sido publicado");
      ChaptersMethods.verifySavedChapter();

      cy.wait("@saveChapter").then((interception) => {
        expect(interception.response.statusCode).to.equal(201);
      });

      // Verificamos que estemos en la pagina de mis libros
      Logger.verification("La url deberia ser la de mis libros");
      cy.url().should("eq", `${CommonPageData.appPages.baseUrl}books/mybooks`);

      // Seguir escribiendo el libro creado
      Logger.stepNumber(8);
      Logger.step("Damos click en Seguir escribiendo");
      MyBooksMethods.continueWritingClick();

      // Verificamos que estemos en la pagina de publicar capitulos
      Logger.verification("La url deberia ser la de escribir capitulo");
      cy.url().should(
        "eq",
        `${CommonPageData.appPages.baseUrl}books/${bookId}/chapters/write`
      );

      // Insertamos el titulo
      Logger.stepNumber(9);
      Logger.step("Insertamos el titulo del capitulo");
      ChaptersMethods.insertTitle(ChaptersData.chapterContent.title2);

      // Insertamos el contenido del capitulo
      Logger.stepNumber(10);
      Logger.step("Insertamos el contenido del capitulo");
      ChaptersMethods.insertContent(ChaptersData.chapterContent.content2);

      // Interceptamos la peticion
      cy.intercept("POST", CommonPageData.endPoints.chapters).as("saveChapter");

      // Guardamos el capitulo
      Logger.stepNumber(11);
      Logger.step("Damos click en Guardar");
      ChaptersMethods.saveButtonClick();

      // Clickeamos en seguir escribiendo
      Logger.stepNumber(12);
      Logger.step("Damos click en Seguir escribiendo");
      MyBooksMethods.continueWritingClick();

      // Verificamos que estemos en la pagina de publicar capitulos
      Logger.verification("La url deberia ser la de escribir capitulo");
      cy.url().should(
        "eq",
        `${CommonPageData.appPages.baseUrl}books/${bookId}/chapters/write`
      );

      // Abrimos el dropdown
      Logger.stepNumber(13);
      Logger.step("Abrimos el dropdown");
      ChaptersMethods.dropDownClick();

      // Hacemos el drag and drop del segundo capitulo al primero
      Logger.stepNumber(14);
      Logger.step("Hacemos el drag and drop del segundo capitulo al primero");

      // Realiza el drag and drop del primer capítulo hacia el segundo capítulo
      cy.get(
        ".flex.justify-between.items-center.py-2.px-2.relative:last-of-type"
      )
        .drag(
          ".flex.justify-between.items-center.py-2.px-2.relative:first-of-type"
        )
        .then((success) => {
          assert.isTrue(success);
        });
    });
  });
});
