import { DesbanearUsuarioElements } from "./desbanear-usuario.elements";


export class DesbanearUsuariosMethods {
    // Click en la opción "Libros Baneados"
    static clickComentariosOption() {
        DesbanearUsuarioElements.buttonsActions.librosOption.click();
    }

    // Click en el botón de selección de opciones
    static clickSelectOption() {
        DesbanearUsuarioElements.buttonsActions.selectOption.click();
    }

    // Seleccionar la opción "Solicitado"
    static selectSolicitadoOption() {
        DesbanearUsuarioElements.buttonsActions.selectSolicitado.click();
    }

    // Click en el botón "Deshacer Baneo"
    static clickDeshacerDesbaneo() {
        DesbanearUsuarioElements.buttonsActions.deshacerDesbaneo.click();
    }

    // Click en el botón "Aceptar" para confirmar el desbaneo
    static clickAceptarDesbaneo() {
        DesbanearUsuarioElements.buttonsActions.aceptarDesbaneo.click();
    }

    // Método para verificar que la opción "Libros Baneados" esté visible
    static verifyLibrosOptionVisible() {
        DesbanearUsuarioElements.buttonsActions.librosOption.should('be.visible');
    }

    // Método para verificar que el botón de selección esté visible
    static verifySelectOptionVisible() {
        DesbanearUsuarioElements.buttonsActions.selectOption.should('be.visible');
    }

    // Método para verificar que la opción "Solicitado" esté visible
    static verifySolicitadoOptionVisible() {
        DesbanearUsuarioElements.buttonsActions.selectSolicitado.should('be.visible');
    }

    // Método para verificar que el botón "Deshacer Baneo" esté visible
    static verifyDeshacerDesbaneoVisible() {
        DesbanearUsuarioElements.buttonsActions.deshacerDesbaneo.should('be.visible');
    }

    // Método para verificar que el botón "Aceptar Desbaneo" esté visible
    static verifyAceptarDesbaneoVisible() {
        DesbanearUsuarioElements.buttonsActions.aceptarDesbaneo.should('be.visible');
    }
}
