import { LoginData } from "../../login/login.data";

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
            }, 
            get aceptarModerador() {
                return cy.get('div.justify-end button');
            },
            get revokePermissionsButton() {
                return cy.contains('button', 'Revocar Permisos');
            }
        }
    }

    static get inputsActions() {
        return {
            get inputAddModerador() {
                return cy.get('label').contains('Buscar por username').siblings('input');
            }
        }
    }

    static get listOption() {
        return {
            get selectUserFromList() {
                return cy.get('input[autocomplete="off"]')
            },
            get selectNewModeratorFromTable() {
                return cy.get('td').contains(LoginData.userCredentials.username).parent('tr')
            }
        }
    }

    static get modalElements() {
        return {
            get dialog() {
                return cy.get('div[role="dialog"]')
            },
            get cancelButton() {
                return this.dialog.contains('button', 'Cancelar')
            },
            get acceptButton() {
                return this.dialog.contains('button', 'Aceptar')
            }
        }
    }

}
