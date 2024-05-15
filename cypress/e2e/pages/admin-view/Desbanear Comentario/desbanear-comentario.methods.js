import { DesbanearComentariosElements } from "./desbanear-comentario.elements";

export class DesbanearComentariosMethods {
    // Click en la opción "Libros Baneados"
    static clickComentariosOption() {
        DesbanearComentariosElements.buttonsActions.librosOption.click();
    }

    // Click en el botón de selección de opciones
    static clickSelectOption() {
        DesbanearComentariosElements.buttonsActions.selectOption.click();
    }

    // Seleccionar la opción "Solicitado"
    static selectSolicitadoOption() {
        DesbanearComentariosElements.buttonsActions.selectSolicitado.click();
    }

    // Click en el botón "Deshacer Baneo"
    static clickDeshacerDesbaneo() {
        DesbanearComentariosElements.buttonsActions.deshacerDesbaneo.click();
    }

    // Click en el botón "Aceptar" para confirmar el desbaneo
    static clickAceptarDesbaneo() {
        DesbanearComentariosElements.buttonsActions.aceptarDesbaneo.click();
    }

    // Método para verificar que la opción "Libros Baneados" esté visible
    static verifyLibrosOptionVisible() {
        DesbanearComentariosElements.buttonsActions.librosOption.should('be.visible');
    }

    // Método para verificar que el botón de selección esté visible
    static verifySelectOptionVisible() {
        DesbanearComentariosElements.buttonsActions.selectOption.should('be.visible');
    }

    // Método para verificar que la opción "Solicitado" esté visible
    static verifySolicitadoOptionVisible() {
        DesbanearComentariosElements.buttonsActions.selectSolicitado.should('be.visible');
    }

    // Método para verificar que el botón "Deshacer Baneo" esté visible
    static verifyDeshacerDesbaneoVisible() {
        DesbanearComentariosElements.buttonsActions.deshacerDesbaneo.should('be.visible');
    }

    // Método para verificar que el botón "Aceptar Desbaneo" esté visible
    static verifyAceptarDesbaneoVisible() {
        DesbanearComentariosElements.buttonsActions.aceptarDesbaneo.should('be.visible');
    }
}
