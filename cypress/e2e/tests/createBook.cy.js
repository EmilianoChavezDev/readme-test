const { CreateBookData } = require("../pages/create-book/create-book.data");
const {
  CreateBookMethods,
} = require("../pages/create-book/create-book.methods");
const { LoginData } = require("../pages/login/login.data");
const { LoginMethods } = require("../pages/login/login.methods");
const { NavBarMethods } = require("../pages/navbar/navbar.methods");
import { Logger } from "../../support/logger";
import { CommonPageData } from "../pages/common-page/common-page.data";

// Test create Book
describe("Test createBook", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Navegamos a la pagina de login");
    cy.visit(CommonPageData.appPages.login);

    Logger.verification("Estamos en la pagina de login");
    cy.url().should("eq", CommonPageData.appPages.login);

    Logger.stepNumber(2);
    Logger.step("Login con datos validos");
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    Logger.verification("El boton de Escribe del NavBar deberia ser visible");
    NavBarMethods.verifyWriteButton();
  });

  it.only("Fill and submit the book form", () => {
    // Vamos al boton crear libro
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Crear libro nuevo del navbar");
    NavBarMethods.goToCreateBook();

    // Verificamos que la url sea de creacion de libro
    Logger.verification(
      "La url deberia ser la misma que la de creacion de libro"
    );
    cy.url().should("eq", CommonPageData.appPages.createBookUrl);

    // Interceptamos la peticion para simular que se creo el libro
    Logger.stepNumber(4);
    Logger.step("Llenamos el formulario y damos click en Seguir");
    cy.intercept("POST", "https://readme-backend.fly.dev/libros").as(
      "createBook"
    );

    // Metodo para crear un libro y enviar la peticion
    CreateBookMethods.createBook(
      CreateBookData.bookData.title,
      CreateBookData.bookData.sinopsis,
      CreateBookData.bookData.category,
      CreateBookData.bookData.cover
    );

    // Esperamos a que la peticion se complete
    cy.wait("@createBook").then((interception) => {
      expect(interception.response.statusCode).to.equal(201);
    });
  });

  it("Show validation errors for empty fields", () => {
    // Vamos al boton crear libro del navbar
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Crear libro nuevo del navbar");
    NavBarMethods.goToCreateBook();

    // Verificamos que la url sea de creacion de libro
    Logger.verification(
      "La url deberia ser la misma que la de creacion de libro"
    );
    cy.url().should("eq", CommonPageData.appPages.createBookUrl);

    // Hacemos click en el boton de crear de la pagina books/create
    Logger.stepNumber(4);
    Logger.step("Damos click en Seguir sin llenar los campos");
    CreateBookMethods.seguirButtonClick();

    // Verificamos que se muestren los mensajes de error
    Logger.verification("Deberia mostrar los mensajes de error");
    CreateBookMethods.verifyEmptyTitleError();
    CreateBookMethods.verifyEmptySinopsisError();
    CreateBookMethods.verifyEmptyCategoryError();
  });

  it("Display uploaded image in preview", () => {
    // En el navbar damos click en Escribe y es Crear nuevo libro
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Crear libro nuevo del navbar");
    NavBarMethods.goToCreateBook();

    // Verificamos que la url sea de creacion de libro
    Logger.verification(
      "La url deberia ser la misma que la de creacion de libro"
    );
    cy.url().should("eq", CommonPageData.appPages.createBookUrl);

    // Usamos el metodo para cargar una portada
    Logger.stepNumber(4);
    Logger.step("Cargamos una portada");
    CreateBookMethods.coverPreview(BooksData.bookData.cover);

    // Verificamos que la imagen se haya cargado
    Logger.verification("Verificamos si la imagen se cargo correctamente");
    CreateBookMethods.verifyCoverPreview();
  });

  it("Redirect to home page when 'Cancelar' button is clicked", () => {
    // En el navbar damos click en Escribe y es Crear nuevo libro
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Crear libro nuevo del navbar");
    NavBarMethods.goToCreateBook();

    // Verificamos que la url sea de creacion de libro
    Logger.verification(
      "La url deberia ser la misma que la de creacion de libro"
    );
    cy.url().should("eq", CommonPageData.appPages.createBookUrl);

    // Hacemos click en el boton de cancelar
    Logger.stepNumber(4);
    Logger.step("Damos click en Cancelar");
    CreateBookMethods.cancelButtonClick();

    // Verificamos que la url sea la misma
    Logger.verification("La url deberia ser la misma que la de home");
    cy.url().should("eq", CommonPageData.appPages.homeUrl);
  });

  // it("Disable submit button while form is submitting", () => {
  //   // En el navbar damos click en Escribe y es Crear nuevo libro
  //   NavBarMethods.goToCreateBook();

  //   // Interceptamos la peticion para simular que se creo el libro
  //   cy.intercept("POST", CommonPageData.endPoints.postBook).as("createBook");

  //   // Metodo para crear un libro y enviar la peticion
  //   CreateBookMethods.createBook(
  //     CreateBookData.bookData.title,
  //     CreateBookData.bookData.sinopsis,
  //     CreateBookData.bookData.category,
  //     CreateBookData.bookData.cover
  //   );

  //   // Verificamos que el boton de crear este deshabilitado mientras se envia la peticion
  //   CreateBookMethods.verifyDisabledSeguirButton();

  //   // Verificamos que la url sea la misma
  //   cy.url().should("eq", CommonPageData.appPages.createBookUrl);

  //   // Esperamos a que la peticion se complete
  //   cy.wait("@createBook").then((interception) => {
  //     expect(interception.response.statusCode).to.equal(201);
  //   });

  //   // Verificamos que el boton de crear no este deshabilitado después de la petición
  //   CreateBookMethods.verifyEnabledSeguireButton();
  // });
});
