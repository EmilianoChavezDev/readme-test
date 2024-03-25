const { BooksData } = require("./pages/books/books.data");
const { BooksElements } = require("./pages/books/books.elements");
const { BookMethods } = require("./pages/books/books.methods");
const { LoginData } = require("./pages/login/login.data");
const { LoginMethods } = require("./pages/login/login.methods");
const { NavBarElements } = require("./pages/navbar/navbar.elements");

// Test create Book
describe("Test createBook", () => {
  beforeEach(() => {
    cy.visit("https://test--readme-test.netlify.app/auth/login");

    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    cy.get("nav.relative div").eq(0).should("be.visible");
  });

  const createBookEndpoint =
    "https://test--readme-test.netlify.app/books/create";

  const getPetition = "https://readme-backend.fly.dev/libros";

  const homeUrl = "https://test--readme-test.netlify.app/";

  it("Fill and submit the book form", () => {
    // Vamos al endpoint de crear libros
    NavBarElements.buttons.writeButton.click();

    NavBarElements.buttons.createBookButton.click();

    // Interceptamos la peticion para simular que se creo el libro
    cy.intercept("POST", getPetition, {}).as("createBook");

    // Usamos el metodo createBook de la clase BookMethods para llenar el formulario
    BookMethods.createBook(
      BooksData.bookData.title,
      BooksData.bookData.sinopsis,
      BooksData.bookData.category,
      BooksData.bookData.cover
    );

    cy.wait(2000);

    // Hacemos click en el boton de crear
    BooksElements.bookButtons.createButton.click();

    // Verificamos que la url sea la misma
    cy.url().should("eq", createBookEndpoint);

    // Esperamos a que la peticion se complete
    cy.wait("@createBook").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it("Show validation errors for empty fields", () => {
    // Vamos al endpoint de crear libros
    NavBarElements.buttons.writeButton.click();

    NavBarElements.buttons.createBookButton.click();

    // Hacemos click en el boton de crear
    BooksElements.bookButtons.createButton.click();

    // Verificamos que se muestren los mensajes de error
    BooksElements.emptyFieldsError.title.should(
      "contain.text",
      "El título no puede estar vacio."
    );

    BooksElements.emptyFieldsError.sinopsis.should(
      "contain.text",
      "La descripción no puede estar vacio"
    );

    BooksElements.emptyFieldsError.category.should(
      "contain.text",
      "Debes seleccionar una categoría"
    );
  });

  it("Display uploaded image in preview", () => {
    // Vamos al endpoint de crear libros
    NavBarElements.buttons.writeButton.click();

    NavBarElements.buttons.createBookButton.click();

    // Usamos el metodo coverPreview de la clase BookMethods para cargar una imagen
    BookMethods.coverPreview(BooksData.bookData.cover);
    cy.wait(2000);

    // Verificamos que la imagen se haya cargado
    cy.get('label[for="portada"]', { timeout: 10000 }).should(
      "contain.text",
      "Cambiar portada"
    );
  });

  it("Redirect to home page when 'Cancelar' button is clicked", () => {
    // Vamos al endpoint de crear libros
    NavBarElements.buttons.writeButton.click();

    NavBarElements.buttons.createBookButton.click();

    BooksElements.bookButtons.cancelButton.click();
    cy.url().should("eq", homeUrl);
  });

  it("Disable submit button while form is submitting", () => {
    // Vamos al endpoint de crear libros
    NavBarElements.buttons.writeButton.click();

    NavBarElements.buttons.createBookButton.click();

    // Interceptamos la peticion para simular que se creo el libro
    cy.intercept("POST", getPetition, {}).as("createBook");

    // Usamos el metodo createBook de la clase BookMethods para llenar el formulario
    BookMethods.createBook(
      BooksData.bookData.title,
      BooksData.bookData.sinopsis,
      BooksData.bookData.category,
      BooksData.bookData.cover
    );

    // Hacemos click en el boton de crear
    BooksElements.bookButtons.createButton.click();

    // Verificamos que el boton de crear este deshabilitado
    BooksElements.bookButtons.createButton.should("be.disabled");

    // Verificamos que la url sea la misma
    cy.url().should("eq", createBookEndpoint);

    // Esperamos a que la peticion se complete
    cy.wait("@createBook").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });

    // Verificamos que el boton de crear no este deshabilitado
    BooksElements.bookButtons.createButton.should("not.be.disabled");
  });
});
