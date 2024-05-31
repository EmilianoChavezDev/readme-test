import { Logger } from '../../../../support/logger'
import { RegisterMethods } from '../../../pages/register/register.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CommonPageMethods } from '../../../pages/common-page/common-page.methods'

const randomUsername = CommonPageMethods.generateRandomString()
const randomEmail = CommonPageMethods.generateRandomEmail(5)
const randomPassword = CommonPageMethods.generateRandomString(8)

const randomBirthDate = CommonPageMethods.generateRandomBirthDate()

describe('Register', () => {
    
    beforeEach(() => {
        Logger.stepNumber(1)
        Logger.step('Navegamos a la pagina de registrarse')
        cy.visit(CommonPageData.appPages.registerUrl)

        Logger.verification('Estamos en la pagina de registrarse')
        cy.url().should('eq', CommonPageData.appPages.registerUrl)
    })

    it('Correct Register', () => {
        Logger.stepNumber(2)
        Logger.step('Registrarse con datos validos')
        RegisterMethods.signUp(
            randomUsername,
            randomEmail,
            randomPassword,
            randomPassword,
            randomBirthDate
        )

        Logger.verification('El boton de Escribe del NavBar deberia ser visible')
        RegisterMethods.verifyMessageOk()
    })

})
