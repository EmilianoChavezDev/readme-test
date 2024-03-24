import { BooksData } from "./pages/books/books.data";
import { BookMethods } from "./pages/books/books.methods";
import { LoginData } from "./pages/login/login.data";
import { LoginMethods } from "./pages/login/login.methods";

describe("Escribir un capítulo", () => {
  beforeEach(() => {
    cy.visit("https://test--readme-test.netlify.app/auth/login");

    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    cy.get("nav.relative div").eq(0).should("be.visible");
  });

  it("Escribir un capítulo para un libro existente", () => {
    // Intercepta la solicitud de creación del libro
    cy.intercept("POST", "https://readme-backend.fly.dev/libros", {
      statusCode: 200,
      body: {
        message: "Libro creado correctamente",
        id: "423", // Simula que se creo un libro con ID 1
      },
    }).as("createBook");

    // Intercepta la solicitud de creación del capítulo
    cy.intercept(
      "POST",
      "https://readme-backend.fly.dev/libros/423/chapters/write",
      {}
    ).as("createChapter");

    // Visita la página para agregar información del libro
    cy.visit("https://test--readme-test.netlify.app/books/create");

    // Usamos el metodo createBook de la clase BookMethods para llenar el formulario
    BookMethods.createBook(
      BooksData.bookData.title,
      BooksData.bookData.sinopsis,
      BooksData.bookData.category,
      BooksData.bookData.cover
    );
    // Envia el formulario para crear el libro
    cy.get(".bg-BooksCreateSeguirButton").click();

    // Verifica que se haya creado el libro correctamente
    cy.wait("@createBook").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });

    // Verifica que se redirija a la página de escribir un capítulo
    cy.url().should("include", "/books/423/chapters/write");

    // Completa el formulario para escribir el capítulo
    cy.get('input[placeholder="Ingrese el título del capítulo"]').type(
      "Capítulo 1"
    );
    cy.get(".editor-container .ql-editor").type("Contenido del capítulo");

    // Envía el formulario para crear el capítulo
    cy.contains("button", "Guardar", { timeout: 10000 }).click();

    // Verifica que se haya creado el capitulo correctamente
    cy.wait("@createChapter").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      expect(interception.response.body.message).to.equal(
        "Capítulo creado correctamente"
      );
    });
  });
});
