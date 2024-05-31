import { Logger } from '../../../../../support/logger'
import { signin } from '../../../../../support/commonSetup'
import { NavBarMethods } from '../../../../pages/navbar/navbar.methods'
import { AdminViewMethods } from '../../../../pages/admin-view/Add Moderador/admin-view.methods'
import { DesbanearComentariosMethods } from '../../../../pages/admin-view/Desbanear Comentario/desbanear-comentario.methods'

describe('Unban comment', () => {

    beforeEach(() => signin())

    it('go to my account', () => {
        Logger.stepNumber(3)
        Logger.step('Click en el apartado de mi cuenta')
        NavBarMethods.goToMyAccount()

        Logger.stepNumber(4)
        Logger.step('Click en la vista del administrador')
        AdminViewMethods.AdministradorViewClick()

        Logger.stepNumber(5)
        Logger.step('Click en la opcion de comentarios')
        DesbanearComentariosMethods.clickComentariosOption()

        cy.wait(3000)
        Logger.stepNumber(6)
        Logger.step('Escogemos los baneos solicitados')
        DesbanearComentariosMethods.clickSelectOption()

        Logger.stepNumber(7)
        Logger.step('Buscamos al moderador a agregar')
        DesbanearComentariosMethods.selectSolicitadoOption()

        Logger.stepNumber(8)
        Logger.step('Clickeamos en deshacer desbaneo')
        DesbanearComentariosMethods.clickDeshacerDesbaneo()

        Logger.stepNumber(7)
        Logger.step('Aceptamos el desbaneo')
        DesbanearComentariosMethods.clickAceptarDesbaneo()
    })
    
})