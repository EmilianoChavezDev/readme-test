import { ComentarioElements } from "./comentario.elements";


export class ComentarioMethods {
    // Click en "Apelación de Sanciones"
    static clickApelarSancion() {
        ComentarioElements.actions.clickApelarSancion.click();
    }

    // Click en el botón de selección de opciones
    static clickSelectOption() {
        ComentarioElements.actions.clickSelectOption.click();
    }

    // Seleccionar la opción "Comentario"
    static selectComentarioOption() {
        ComentarioElements.actions.selectComentarioOption.click();
    }

    // Seleccionar el primer elemento de la lista con texto "Comentario"
    static selectOneFromList() {
        ComentarioElements.actions.selectOneFromList.click();
    }

    // Click en el botón "Apelar sanción"
    static selectApelarSancion() {
        ComentarioElements.actions.selectApelarSancion.click();
    }

    // Click en el área de texto para apelar sanción
    static clickInputApelarSancion() {
        ComentarioElements.actions.clickInputApelarSancion.click();
    }

    // Click en el botón "Aceptar"
    static clickAceptar() {
        ComentarioElements.actions.clickAceptar.click();
    }

    // Método para insertar un comentario en el área de texto de apelar sanción
    static insertComment(comment) {
        ComentarioElements.actions.clickInputApelarSancion.type(comment);
    }

    // Verificaciones
    // Verificar que el botón "Apelar sanción" esté visible
    static verifyApelarSancionButtonVisible() {
        ComentarioElements.actions.selectApelarSancion.should('be.visible');
    }

    // Verificar que el área de texto esté visible
    static verifyInputApelarSancionVisible() {
        ComentarioElements.actions.clickInputApelarSancion.should('be.visible');
    }

    // Verificar que el botón "Aceptar" esté visible
    static verifyAceptarButtonVisible() {
        ComentarioElements.actions.clickAceptar.should('be.visible');
    }

    static verifyMessageOk() {
        ComentarioElements.actions.verifyMessageTrue
            .invoke("text")
            .should("eq", "La apelacion ha sido enviada correctamente");
    }
}
