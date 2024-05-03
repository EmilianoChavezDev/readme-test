import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";
import { Logger } from "../../../../support/logger";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { MyBookRestoreMethods } from "../../../pages/restore-book/restore.methods";
import { MyRestoreMethods } from "../../../pages/restore-chapter/restore.methods";

describe("Restore chapter", () => {
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

  it("go to navbar", () => {
    Logger.stepNumber(3);
    Logger.step("Click en las opcines del usuario");
    NavBarMethods.goToMyAccount();

    Logger.stepNumber(4);
    Logger.step("Entramos a la pagina de Papelera");
    MyRestoreMethods.openTrushPage();

    Logger.verification("La url deberia ser la pagina de mi cuenta");
    cy.url().should("eq", `${CommonPageData.appPages.baseUrl}books/recycle`);

    Logger.stepNumber(5);
    Logger.step("Seleccionamos la opcion de restauracion de capitulos");
    MyRestoreMethods.selectBookRestored();

    Logger.stepNumber(6);
    Logger.step("Restauramos el capitulo");
    MyRestoreMethods.restore();

    Logger.verification("Libro restaurado con éxito");
    MyRestoreMethods.verifyRestoreBook();
  });
});
