import { Logger } from '../../../../../support/logger'
import { signin } from '../../../../../support/commonSetup'
import { NavBarMethods } from '../../../../pages/navbar/navbar.methods'
import { AdminViewMethods } from '../../../../pages/admin-view/Add Moderador/admin-view.methods'
import { DesbanearLibroMethods } from '../../../../pages/admin-view/Desbanear Libro/desbanear-libro.methods'

describe('Unban book', () => {

    beforeEach(() => signin())

    it('go to my account', () => {
        Logger.stepNumber(3)
        Logger.step('Click en el apartado de mi cuenta')
        NavBarMethods.goToMyAccount()

        Logger.stepNumber(4)
        Logger.step('Click en la vista del administrador')
        AdminViewMethods.AdministradorViewClick()

        Logger.stepNumber(5)
        Logger.step('Click en la opcion de libros')
        DesbanearLibroMethods.clickLibrosOption()

        Logger.stepNumber(6)
        Logger.step('Clickeamos el boton de agregar nuevo moderador')
        DesbanearLibroMethods.clickSelectOption()

        Logger.stepNumber(7)
        Logger.step('Buscamos al moderador a agregar')
        DesbanearLibroMethods.selectSolicitadoOption()

        Logger.stepNumber(8)
        Logger.step('Clickeamos en deshacer desbaneo')
        DesbanearLibroMethods.clickDeshacerDesbaneo()

        Logger.stepNumber(7)
        Logger.step('Aceptamos el desbaneo')
        DesbanearLibroMethods.clickAceptarDesbaneo()
    })
    
})