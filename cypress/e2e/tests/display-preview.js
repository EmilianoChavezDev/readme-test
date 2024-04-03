import { CreateBookData } from "../pages/create-book/create-book.data";
import { CreateBookMethods } from "../pages/create-book/create-book.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { NavBarMethods } from "../pages/navbar/navbar.methods";
import { Logger } from "../../support/logger";
import { CommonPageData } from "../pages/common-page/common-page.data";

describe("Display book image preview", () => {
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

  it("Display uploaded image in preview", () => {
    // En el navbar damos click en Escribe y es Crear nuevo libro
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Crear libro nuevo del navbar");
    NavBarMethods.goToWriteBook();

    // Verificamos que la url sea de creacion de libro
    Logger.verification("La url deberia ser la de creacion de libro");
    cy.url().should("eq", CommonPageData.appPages.baseUrl + "books/create");

    // Usamos el metodo para cargar una portada
    Logger.stepNumber(4);
    Logger.step("Cargamos una portada");
    CreateBookMethods.coverPreview(CreateBookData.bookData.cover);

    // Verificamos que la imagen se haya cargado
    Logger.verification("Verificamos si la imagen se cargo correctamente");
    CreateBookMethods.verifyCoverPreview();
  });
});
