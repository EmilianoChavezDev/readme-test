import { LibroElements } from "./libros.elements";


export class LibroMethods {
    // Click en "Apelación de Sanciones"
    static clickApelarSancion() {
        LibroElements.actions.clickApelarSancion.click();
    }

    // Click en el botón de selección de opciones
    static clickSelectOption() {
        LibroElements.actions.clickSelectOption.click();
    }

    // Seleccionar la opción "Libro"
    static selectComentarioOption() {
        LibroElements.actions.selectComentarioOption.click();
    }

    // Seleccionar el primer elemento de la lista con texto "Libro"
    static selectOneFromList() {
        LibroElements.actions.selectOneFromList.click();
    }

    // Click en el botón "Apelar sanción"
    static selectApelarSancion() {
        LibroElements.actions.selectApelarSancion.click();
    }

    // Click en el área de texto para apelar sanción
    static clickInputApelarSancion() {
        LibroElements.actions.clickInputApelarSancion.click();
    }

    // Click en el botón "Aceptar"
    static clickAceptar() {
        LibroElements.actions.clickAceptar.click();
    }

    // Método para insertar un comentario en el área de texto de apelar sanción
    static insertComment(comment) {
        LibroElements.actions.clickInputApelarSancion.type(comment);
    }

    // Verificaciones
    // Verificar que el botón "Apelar sanción" esté visible
    static verifyApelarSancionButtonVisible() {
        LibroElements.actions.selectApelarSancion.should('be.visible');
    }

    // Verificar que el área de texto esté visible
    static verifyInputApelarSancionVisible() {
        LibroElements.actions.clickInputApelarSancion.should('be.visible');
    }

    // Verificar que el botón "Aceptar" esté visible
    static verifyAceptarButtonVisible() {
        LibroElements.actions.clickAceptar.should('be.visible');
    }

    static verifyMessageOk() {
        LibroElements.actions.verifyMessageTrue
            .invoke("text")
            .should("eq", "La apelacion ha sido enviada correctamente");
    }
}
