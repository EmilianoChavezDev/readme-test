import { Logger } from '../../../../support/logger'
import { LoginData } from '../../../pages/login/login.data'
import { LoginMethods } from '../../../pages/login/login.methods'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CommonPageMethods } from '../../../pages/common-page/common-page.methods'

const randomUsername = CommonPageMethods.generateRandomString()
const randomPassword = CommonPageMethods.generateRandomString(8)

describe('Login', () => {

    beforeEach(() => {
        Logger.stepNumber(1)
        Logger.step('Navegamos a la pagina de login')
        cy.visit(CommonPageData.appPages.loginUrl)
        Logger.verification('Estamos en la pagina de login')
        cy.url().should('eq', CommonPageData.appPages.loginUrl)
    })

    it('Incorrect Login', () => {
        Logger.stepNumber(2)
        Logger.step('Login con datos no validos')
        LoginMethods.login(randomUsername, randomPassword)
        Logger.verification('Invalid email or password')
        LoginMethods.verifyUserOrPasswordNotValid()
    })

})
