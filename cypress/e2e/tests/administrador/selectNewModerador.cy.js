import { Logger } from "../../../support/logger";
import { NavBarMethods } from "../../pages/navbar/navbar.methods";
import { LoginData } from "../../pages/login/login.data";
import { LoginMethods } from "../../pages/login/login.methods";
import { CommonPageData } from "../../pages/common-page/common-page.data";
import { AdminViewMethods } from "../../pages/admin-view/admin-view.methods";

describe("Add new moderador", () => {
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

    it("go to my account", () => {
        Logger.stepNumber(3);
        Logger.step("Click en el apartado de mi cuenta")
        NavBarMethods.goToMyAccount();

        Logger.stepNumber(4);
        Logger.step("Click en la vista del administrador")
        AdminViewMethods.AdministradorViewClick();

        Logger.stepNumber(5);
        Logger.step("Click en la opcion de moderador")
        AdminViewMethods.ModeradorOptionClick();

        Logger.stepNumber(6);
        Logger.step("Clickeamos el boton de agregar nuevo moderador")
        AdminViewMethods.AddNewModerador();

        Logger.stepNumber(7);
        Logger.step("Buscamos al moderador a agregar")
        AdminViewMethods.ClickAddModeradorInput("toto");
    });
})