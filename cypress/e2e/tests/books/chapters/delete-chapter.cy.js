import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";
import { Logger } from "../../../../support/logger";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { MyDeleteChaptersElements } from "../../../pages/delete-chapter/delete.methods";



describe("Delete chapter", () => {
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

  it("Continue writing chapter", () => {
    Logger.stepNumber(3);
    Logger.step("Click en Escribe y en Crear libro nuevo del navbar");
    NavBarMethods.goToMyBooks();

    Logger.verification("La url deberia ser la de mis libros");
    cy.url().should("eq", `${CommonPageData.appPages.baseUrl}books/mybooks`);

    Logger.stepNumber(4);
    Logger.step("Seleccionamos el libro y damos click en seguir escribiendo");
    MyDeleteChaptersElements.continueWriting();

    cy.wait(3000);
    Logger.stepNumber(5);
    Logger.step("Abrimos el menu de capitulos del libro");
    MyDeleteChaptersElements.openMenu();

    Logger.stepNumber(6);
    Logger.step("Abrimos el menu de capitulos del libro");
    MyDeleteChaptersElements.deleteChapterClick();

    Logger.stepNumber(7);
    Logger.step("Cerramos el menu");
    MyDeleteChaptersElements.openMenu();

    Logger.stepNumber(8);
    Logger.step("Y lo vuelvo a abrir para comprobar el cambio");
    MyDeleteChaptersElements.openMenu();
  });
});
