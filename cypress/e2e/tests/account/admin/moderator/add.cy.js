import { Logger } from '../../../../../support/logger'
import { signin } from '../../../../../support/commonSetup'
import { NavBarMethods } from '../../../../pages/navbar/navbar.methods'
import { AdminViewMethods } from '../../../../pages/admin-view/Add Moderador/admin-view.methods'
import { LoginData } from '../../../../pages/login/login.data'

describe('Add new moderador', () => {

    beforeEach(() => signin('admin'))

    it('go to my account', () => {
        Logger.stepNumber(3)
        Logger.step('Click en el apartado de mi cuenta')
        NavBarMethods.goToMyAccount()

        Logger.stepNumber(4)
        Logger.step('Click en la vista del administrador')
        AdminViewMethods.AdministradorViewClick()

        Logger.stepNumber(5)
        Logger.step('Click en la opcion de moderador')
        AdminViewMethods.ModeradorOptionClick()

        Logger.stepNumber(6)
        Logger.step('Clickeamos el boton de agregar nuevo moderador')
        AdminViewMethods.AddNewModerador()

        Logger.stepNumber(7)
        Logger.step('Buscamos al moderador a agregar')
        AdminViewMethods.ClickAddModeradorInput(LoginData.userCredentials.username)

        cy.wait(800)
        Logger.stepNumber(8)
        Logger.step('Seleccionamos al primer usuario de la busqueda')
        AdminViewMethods.PressEnterSearchInput()

        Logger.stepNumber(9)
        Logger.step('Aceptamos el nuevo moderador')
        AdminViewMethods.aceptarModeradorNuevo()

        cy.wait(800)
        Logger.stepNumber(10)
        Logger.step('Revocar permisos del Moderador nuevo')
        AdminViewMethods.SelectModeratorFromTable()
        AdminViewMethods.ClickToRevokePermissionButton()
        AdminViewMethods.ClickToRevokePermissionConfirmationButton()

    })
    
})