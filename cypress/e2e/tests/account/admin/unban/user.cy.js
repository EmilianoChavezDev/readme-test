import { Logger } from '../../../../../support/logger'
import { signin } from '../../../../../support/commonSetup'
import { NavBarMethods } from '../../../../pages/navbar/navbar.methods'
import { AdminViewMethods } from '../../../../pages/admin-view/Add Moderador/admin-view.methods'
import { DesbanearUsuariosMethods } from '../../../../pages/admin-view/Desbanear Cuenta/desbanear-usuario.methods'

describe('Unban user', () => {

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
        DesbanearUsuariosMethods.clickComentariosOption()

        cy.wait(3000)
        Logger.stepNumber(6)
        Logger.step('Escogemos los baneos solicitados')
        DesbanearUsuariosMethods.clickSelectOption()

        Logger.stepNumber(7)
        Logger.step('Buscamos al moderador a agregar')
        DesbanearUsuariosMethods.selectSolicitadoOption()

        Logger.stepNumber(8)
        Logger.step('Clickeamos en deshacer desbaneo')
        DesbanearUsuariosMethods.clickDeshacerDesbaneo()

        Logger.stepNumber(7)
        Logger.step('Aceptamos el desbaneo')
        DesbanearUsuariosMethods.clickAceptarDesbaneo()
    })

})