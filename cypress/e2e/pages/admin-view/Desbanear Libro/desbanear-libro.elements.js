export class DesbanearLibroElements {
    static get buttonsActions() {
        return {
            get librosOption() {
                return cy.contains('span', 'Libros Baneados')
            },
            get selectOption() {
                return cy.get('button[classnameprefix="my-react-select"]')
            },
            get selectSolicitado() {
                return cy.contains('li', 'Solicitado')
            },
            get deshacerDesbaneo() {
                return cy.contains('button', 'Deshacer Baneo')
            },
            get aceptarDesbaneo() {
                return cy.get('button.align-middle').eq(1)
            }
        }
    }
}