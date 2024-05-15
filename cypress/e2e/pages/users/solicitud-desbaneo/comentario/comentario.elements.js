export class ComentarioElements {

    static get actions() {
        return {

            get clickApelarSancion() {
                return cy.contains('h2', 'Apelación de Sanciones')
            },

            get clickSelectOption() {
                return cy.get('button[classnameprefix="my-react-select"]')
            },
            get selectComentarioOption() {
                return cy.contains('li', 'Comentario')
            },
            get selectOneFromList() {
                return cy.get('td.text-colorPrimario').eq(1)
            },
            get selectApelarSancion() {
                return cy.contains('button', 'Apelar sanción')
            }
            ,
            get clickInputApelarSancion() {
                return cy.get('textarea.text-md')
            },
            get clickAceptar() {
                return cy.get('button.align-middle').eq(1)
            },
            get verifyMessageTrue() {
                return cy.get(".go2072408551");
            }
        }
    }
}