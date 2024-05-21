import { Logger } from '../../../support/logger'
import { LoginData } from '../../pages/login/login.data'
import { LoginMethods } from '../../pages/login/login.methods'
import { NavBarMethods } from '../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../pages/common-page/common-page.data'
import { AdminViewMethods } from '../../pages/admin-view/Add Moderador/admin-view.methods'
import { DesbanearUsuariosMethods } from '../../pages/admin-view/Desbanear Cuenta/desbanear-usuario.methods'

describe('Unban user', () => {

    beforeEach(() => {
        Logger.stepNumber(1)
        Logger.step('Navegamos a la pagina de login')
        cy.visit(CommonPageData.appPages.loginUrl)

        Logger.verification('Estamos en la pagina de login')
        cy.url().should('eq', CommonPageData.appPages.loginUrl)

        Logger.stepNumber(2)
        Logger.step('Login con datos validos')
        LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password)

        Logger.verification('El boton de Escribe del NavBar deberia ser visible')
        NavBarMethods.verifyWriteButton()
    })

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