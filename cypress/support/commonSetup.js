import { slowCypressDown } from 'cypress-slow-down'

import { Logger } from './logger'
import { LoginData } from '../e2e/pages/login/login.data'
import { LoginMethods } from '../e2e/pages/login/login.methods'
import { NavBarMethods } from '../e2e/pages/navbar/navbar.methods'
import { CommonPageData } from '../e2e/pages/common-page/common-page.data'

export const signin = type => {

    const { userCredentials, moderatorCredentials, adminCredentials } = LoginData

    Logger.stepNumber(1)
    Logger.step('Navegamos a la pagina de login')
    cy.visit(CommonPageData.appPages.loginUrl)

    Logger.verification('Estamos en la pagina de login')
    cy.url().should('eq', CommonPageData.appPages.loginUrl)

    Logger.stepNumber(2)
    Logger.step('Login con datos validos')
    LoginMethods.login(
        type === 'admin'? adminCredentials.email : type === 'moderator'? moderatorCredentials.email : userCredentials?.email, 
        type === 'admin'? adminCredentials.password : type === 'moderator'? moderatorCredentials.password : userCredentials?.password
    )

    Logger.verification('El boton de Escribe del NavBar deberia ser visible')
    NavBarMethods.verifyWriteButton()

    cy.then(() => {
        slowCypressDown()
    })
}