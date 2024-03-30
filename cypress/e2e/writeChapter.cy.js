import { BooksData } from "./pages/books/books.data";
import { BookMethods } from "./pages/books/books.methods";
import { LoginData } from "./pages/login/login.data";
import { LoginMethods } from "./pages/login/login.methods";
import { NavBarElements } from "./pages/navbar/navbar.elements";

//TODO: Code Refractor / finish testing
// describe("Write Chapter", () => {
//   const createBookUrl = "https://readme-backend.fly.dev/libros";
//   const homeUrl = "https://test--readme-test.netlify.app";
//   const loginUrl = "https://test--readme-test.netlify.app/auth/login";

//   const goToCreateBook = () => {
//     NavBarElements.buttons.writeButton.click();
//     NavBarElements.buttons.createBookButton.click();
//   };

//   //   let user_id;
//   //   let authToken;
//   //   let bookId;

//   beforeEach(() => {
//     cy.visit(loginUrl);

//     // Ingresamos los datos de login y hacemos login
//     LoginMethods.login(
//       LoginData.validCredentials.username,
//       LoginData.validCredentials.password
//     );

//     // Validamos que se haya hecho login si se muestra el boton de escribir
//     NavBarElements.buttons.writeButton.should("be.visible");
//   });

//   it("Create a book and write a chapter ", () => {
//     // Vamos al boton ecribir luego a crear libro
//     goToCreateBook();

//     BookMethods.createBook(
//       BooksData.bookData.title,
//       BooksData.bookData.sinopsis,
//       BooksData.bookData.category,
//       BooksData.bookData.cover
//     );

//     // Envia el formulario para crear el libro
//     cy.get(".bg-BooksCreateSeguirButton").click();

//     //Verificamos que estamos en la pagina de escribir capitulos
//     cy.url().should("eq", `${homeUrl}/write`);
//   });
// });
