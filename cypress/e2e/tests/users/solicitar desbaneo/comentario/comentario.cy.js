import { LoginData } from "../../../../pages/login/login.data";
import { LoginMethods } from "../../../../pages/login/login.methods";
import { NavBarMethods } from "../../../../pages/navbar/navbar.methods";
import { Logger } from "../../../../../support/logger";
import { CommonPageData } from "../../../../pages/common-page/common-page.data";
import { ComentarioMethods } from "../../../../pages/users/solicitud-desbaneo/comentario/comentario.methods";

describe("Solicitar desbaneo de un comentario", () => {
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
        Logger.step("Seleccionamos el apartado de apelacion");
        ComentarioMethods.clickApelarSancion();

        Logger.verification("La url deberia ser la pagina de mi cuenta");
        cy.url().should(
            "eq",
            `${CommonPageData.appPages.baseUrl}appeals/content_appeal`
        );

        Logger.stepNumber(5);
        Logger.step("Seleccionamos el select");
        ComentarioMethods.clickSelectOption();

        Logger.stepNumber(6);
        Logger.step("Seleccionamos comentario");
        ComentarioMethods.selectComentarioOption();

        Logger.stepNumber(7);
        Logger.step("Apelamos uno de la lista");
        ComentarioMethods.selectOneFromList();

        Logger.stepNumber(8);
        Logger.step("Seleccionamos el boton para apelar");
        ComentarioMethods.selectApelarSancion();

        Logger.stepNumber(9);
        Logger.step("Ponemos un comentario en nuestra solicitud");
        ComentarioMethods.insertComment("Por favor necesito un desbaneo de este comentario");

        Logger.stepNumber(10);
        Logger.step("Enviamos la peticion de desbaneo");
        ComentarioMethods.clickAceptar();

        Logger.verification("La contraseña ha sido actualizada");
        ComentarioMethods.verifyMessageOk();
    });
});
