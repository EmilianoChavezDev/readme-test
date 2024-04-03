// import { CreateBookData } from "../../../pages/create-book/create-book.data";
// import { LoginData } from "../../../pages/login/login.data";
// import { LoginMethods } from "../../../pages/login/login.methods";
// import { NavBarMethods } from "../../../pages/navbar/navbar.methods";
// import { Logger } from "../../../../support/logger";
// import { ChaptersData } from "../../../pages/chapters/chapters.data";
// import { ChaptersMethods } from "../../../pages/chapters/chapters.methods";
// import { CommonPageData } from "../../../pages/common-page/common-page.data";
// import { CreateBookMethods } from "../../../pages/create-book/create-book.methods";

// let bookId;
// //TODO: Fix this test
// const selectFistBook = cy.get("div.bg-gradient-to-t").eq(0);

// describe("Save chapter", () => {
//   beforeEach(() => {
//     Logger.stepNumber(1);
//     Logger.step("Navegamos a la pagina de login");
//     cy.visit(CommonPageData.appPages.loginUrl);

//     Logger.verification("Estamos en la pagina de login");
//     cy.url().should("eq", CommonPageData.appPages.loginUrl);

//     Logger.stepNumber(2);
//     Logger.step("Login con datos validos");
//     LoginMethods.login(
//       LoginData.validCredentials.username,
//       LoginData.validCredentials.password
//     );

//     Logger.verification("El boton de Escribe del NavBar deberia ser visible");
//     NavBarMethods.verifyWriteButton();
//   });

//   it("Read chapter with capitules", () => {
//     Logger.stepNumber(3);
//     Logger.step("Seleccionamos un libro de novedades");
//     selectFistBook.click();

//     Logger.stepNumber(4);
//     Logger.step("Damos click en comenzar a leer");
//   });
// });
