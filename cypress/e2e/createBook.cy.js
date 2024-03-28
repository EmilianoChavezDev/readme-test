const { BooksData } = require("./pages/books/books.data");
const { BookMethods } = require("./pages/books/books.methods");
const { LoginData } = require("./pages/login/login.data");
const { LoginMethods } = require("./pages/login/login.methods");
const { NavBarMethods } = require("./pages/navbar/navbar.methods");
import { Logger } from "../support/logger";

// Test create Book
describe("Test createBook", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Login with valid credentials");
    cy.visit("https://test--readme-test.netlify.app/auth/login");

    Logger.stepNumber(2);
    Logger.step("Login with valid credentials");
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    Logger.verification("NavBar button Escribir should be visible");
    NavBarMethods.verifyWriteButton();
  });

  const createBookUrl = "https://test--readme-test.netlify.app/books/create";

  const getPetition = "https://readme-backend.fly.dev/libros";

  const homeUrl = "https://test--readme-test.netlify.app/";

  it("Fill and submit the book form", () => {
    // Vamos al boton crear libro
    Logger.stepNumber(3);
    Logger.step("Go to create book page");
    NavBarMethods.createBook();

    // Interceptamos la peticion para simular que se creo el libro
    Logger.stepNumber(4);
    Logger.step("Fill the form and submit");
    cy.intercept("POST", getPetition, {}).as("createBook");

    // Metodo para crear un libro y enviar la peticion
    BookMethods.createBook(
      BooksData.bookData.title,
      BooksData.bookData.sinopsis,
      BooksData.bookData.category,
      BooksData.bookData.cover
    );

    // Verificamos que la url sea la misma
    Logger.verification("The user is redirected to the create book page");
    cy.url().should("eq", createBookUrl);

    // Esperamos a que la peticion se complete
    cy.wait("@createBook").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it("Show validation errors for empty fields", () => {
    // Vamos al boton crear libro del navbar
    NavBarMethods.createBook();

    // Hacemos click en el boton de crear de la pagina books/create
    BookMethods.seguirButtonClick();

    // Verificamos que se muestren los mensajes de error
    BookMethods.verifyEmptyTitleError();
    BookMethods.verifyEmptySinopsisError();
    BookMethods.verifyEmptyCategoryError();
  });

  it("Display uploaded image in preview", () => {
    // En el navbar damos click en Escribe y es Crear nuevo libro
    NavBarMethods.createBook();

    // Usamos el metodo para cargar una portada
    BookMethods.coverPreview(BooksData.bookData.cover);

    // Verificamos que la imagen se haya cargado
    BookMethods.verifyCoverPreview();
  });

  it("Redirect to home page when 'Cancelar' button is clicked", () => {
    // En el navbar damos click en Escribe y es Crear nuevo libro
    NavBarMethods.createBook();

    // Hacemos click en el boton de cancelar
    BookMethods.cancelButtonClick();
    cy.url().should("eq", homeUrl);
  });

  it("Disable submit button while form is submitting", () => {
    // En el navbar damos click en Escribe y es Crear nuevo libro
    NavBarMethods.createBook();

    // Interceptamos la peticion para simular que se creo el libro
    cy.intercept("POST", getPetition, {}).as("createBook");

    // Metodo para crear un libro y enviar la peticion
    BookMethods.createBook(
      BooksData.bookData.title,
      BooksData.bookData.sinopsis,
      BooksData.bookData.category,
      BooksData.bookData.cover
    );

    // Verificamos que el boton de crear este deshabilitado
    BookMethods.verifyDisabledCreateButton();

    // Verificamos que la url sea la misma
    cy.url().should("eq", createBookUrl);

    // Esperamos a que la peticion se complete
    cy.wait("@createBook").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });

    // Verificamos que el boton de crear no este deshabilitado
    BookMethods.verifyEnabledCreateButton();
  });
});
