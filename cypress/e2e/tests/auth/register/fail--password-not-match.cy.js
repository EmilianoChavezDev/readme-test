import { Logger } from '../../../../support/logger'
import { RegisterMethods } from '../../../pages/register/register.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CommonPageMethods } from '../../../pages/common-page/common-page.methods'

const randomUsername = CommonPageMethods.generateRandomString()
const randomEmail = CommonPageMethods.generateRandomEmail(5)
const randomPassword = CommonPageMethods.generateRandomString(8)

const randomPasswordDifferent = CommonPageMethods.generateRandomString(8)
const randomBirthDate = CommonPageMethods.generateRandomBirthDate()

describe('Register', () => {
    
    beforeEach(() => {
        Logger.stepNumber(1)
        Logger.step('Navegamos a la pagina de registrarse')
        cy.visit(CommonPageData.appPages.registerUrl)

        Logger.verification('Estamos en la pagina de registrarse')
        cy.url().should('eq', CommonPageData.appPages.registerUrl)
    })

    it('Password Not Match', () => {
        Logger.stepNumber(2)
        Logger.step('Registrarse con contraseña no coinciden')
        RegisterMethods.signUp(
            randomUsername,
            randomEmail,
            randomPassword,
            randomPasswordDifferent,
            randomBirthDate
        )

        Logger.verification('El usuario esta ingresando una contraseña que no coincide')
        RegisterMethods.verifyPasswordNotMatch()
    })

})