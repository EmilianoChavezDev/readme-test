import { Logger } from '../../../support/logger'
import { LoginData } from '../../pages/login/login.data'
import { LoginMethods } from '../../pages/login/login.methods'
import { NavBarMethods } from '../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../pages/common-page/common-page.data'

describe('Logout', () => {
  
    it('should logout', () => {
        Logger.stepNumber(1)
        Logger.step('Navegamos a la pagina de login')
        cy.visit(CommonPageData.appPages.loginUrl)

        Logger.verification('Estamos en la pagina de login')
        cy.url().should('eq', CommonPageData.appPages.loginUrl)

        Logger.stepNumber(2)
        Logger.step('Login con datos validos')
        LoginMethods.login(
        LoginData.validCredentials.username,
        LoginData.validCredentials.password
        )

        Logger.verification('El boton de Escribe del NavBar deberia ser visible')
        NavBarMethods.verifyWriteButton()

        Logger.stepNumber(3)
        Logger.step('Logout')
        NavBarMethods.goToLogout()

        Logger.verification('Deberiamos estar en la pagina de login')
        cy.url().should('eq', CommonPageData.appPages.loginUrl)
    })
    
})