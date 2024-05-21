import { Logger } from '../../../support/logger'
import { LoginData } from '../../pages/login/login.data'
import { LoginMethods } from '../../pages/login/login.methods'
import { NavBarMethods } from '../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../pages/common-page/common-page.data'
import { ModeradorMethods } from '../../pages/moderador/moderador.methods'

describe('Moderador view', () => {

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

    it('go to navbar', () => {
        Logger.stepNumber(3)
        Logger.step('Click en las opcines del usuario')
        NavBarMethods.goToModeradorPanel()

        Logger.stepNumber(4)
        Logger.step('Abrimos el select')
        ModeradorMethods.selectInputSelect()

        Logger.verification('La url deberia ser la pagina de mi cuenta')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}moderator/report_tray`)

        Logger.stepNumber(5)
        Logger.step('Seleccionamos la opcion pendiente')
        ModeradorMethods.selectPendienteSelect()

        Logger.stepNumber(6)
        Logger.step('Seleccionamos el primero de la lista')
        ModeradorMethods.selectFirst()

        Logger.stepNumber(7)
        Logger.step('lo ponemos en revision')
        ModeradorMethods.selectEnRevision()

        Logger.stepNumber(8)
        Logger.step('desactivamos el libro')
        ModeradorMethods.selectDeleteBook()

        Logger.stepNumber(9)
        Logger.step('dejamos un comentario')
        ModeradorMethods.selectInputDelete('eliminado')

        Logger.stepNumber(10)
        Logger.step('desactivamos el libro')
        ModeradorMethods.confirmDelete()

        // Logger.verification('Libro restaurado con éxito')
        // MyRestoreMethods.verifyRestoreBook()
    })

})
