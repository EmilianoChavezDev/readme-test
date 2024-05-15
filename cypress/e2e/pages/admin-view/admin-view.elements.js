export class AdminViewElements {

    static get buttonsActions() {
        return {
            get moderadorOption() {
                return cy.contains('span', 'Moderadores')
            },
            get addNewModerador() {
                return cy.contains('span', 'Agregar Moderador')
            }
            ,
            get selectAdministradorView() {
                return cy.contains('h2', 'Administración')
            }
        };
    }

    // Mensajes de favoritos
    static get inputsActions() {
        return {
            get inputAddModerador() {
                return cy.get('label:contains("Buscar por username")').siblings('input')

            }

        };
    }
    static get listOption() {
        return {
            get selectUserFromList() {
                return cy.get('input[autocomplete="off"]')

            }

        };
    }

}
