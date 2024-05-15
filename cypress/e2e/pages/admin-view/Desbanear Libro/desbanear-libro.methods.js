import { DesbanearLibroElements } from "./desbanear-libro.elements";

export class DesbanearLibroMethods {
    // Click en la opción "Libros Baneados"
    static clickLibrosOption() {
        DesbanearLibroElements.buttonsActions.librosOption.click();
    }

    // Click en el botón de selección de opciones
    static clickSelectOption() {
        DesbanearLibroElements.buttonsActions.selectOption.click();
    }

    // Seleccionar la opción "Solicitado"
    static selectSolicitadoOption() {
        DesbanearLibroElements.buttonsActions.selectSolicitado.click();
    }

    // Click en el botón "Deshacer Baneo"
    static clickDeshacerDesbaneo() {
        DesbanearLibroElements.buttonsActions.deshacerDesbaneo.click();
    }

    // Click en el botón "Aceptar" para confirmar el desbaneo
    static clickAceptarDesbaneo() {
        DesbanearLibroElements.buttonsActions.aceptarDesbaneo.click();
    }

    // Método para verificar que la opción "Libros Baneados" esté visible
    static verifyLibrosOptionVisible() {
        DesbanearLibroElements.buttonsActions.librosOption.should('be.visible');
    }

    // Método para verificar que el botón de selección esté visible
    static verifySelectOptionVisible() {
        DesbanearLibroElements.buttonsActions.selectOption.should('be.visible');
    }

    // Método para verificar que la opción "Solicitado" esté visible
    static verifySolicitadoOptionVisible() {
        DesbanearLibroElements.buttonsActions.selectSolicitado.should('be.visible');
    }

    // Método para verificar que el botón "Deshacer Baneo" esté visible
    static verifyDeshacerDesbaneoVisible() {
        DesbanearLibroElements.buttonsActions.deshacerDesbaneo.should('be.visible');
    }

    // Método para verificar que el botón "Aceptar Desbaneo" esté visible
    static verifyAceptarDesbaneoVisible() {
        DesbanearLibroElements.buttonsActions.aceptarDesbaneo.should('be.visible');
    }
}
