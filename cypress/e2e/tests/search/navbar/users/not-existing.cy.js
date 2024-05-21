import { Logger } from '../../../../../support/logger'
import { LoginData } from '../../../../pages/login/login.data'
import { LoginMethods } from '../../../../pages/login/login.methods'
import { NavBarMethods } from '../../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../../pages/common-page/common-page.data'
import { NavBarSearchMethods } from '../../../../pages/navbar-search/navbar-search.methods'
import { NavBarSearchUsersMethods } from '../../../../pages/users-serach/narbar-search.users.methods'

describe('Search navbar', () => {

    beforeEach(() => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de login')
        cy.visit(CommonPageData.appPages.loginUrl)

        Logger.verification('Verificar que se encuentre en la pagina de login')
        cy.url().should('eq', CommonPageData.appPages.loginUrl)

        Logger.stepNumber(2)
        Logger.step('Login con usuario valido')
        LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password)

        Logger.verification('El boton Escribe del navbar debe estar presente')
        NavBarMethods.verifyWriteButton()
    })

    it('Search non-existing user', () => {
        Logger.stepNumber(3)
        Logger.step('Buscar un usuario que no exista')
        NavBarMethods.searchUser('usuarioquenoexiste')

        cy.wait(4000)

        Logger.stepNumber(4)
        Logger.step('Vamos al apartado de usuarios')
        NavBarSearchUsersMethods.changeToUsersClick()

        Logger.verification('Verificar que no se encuentre ningun resultado')
        NavBarSearchMethods.verifyResultsNotFound()
    })

})
