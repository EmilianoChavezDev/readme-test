import { Logger } from '../../../../support/logger'
import { LoginData } from '../../../pages/login/login.data'
import { RegisterMethods } from '../../../pages/register/register.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CommonPageMethods } from '../../../pages/common-page/common-page.methods'

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

    it('User Already Exist', () => {
        Logger.stepNumber(2)
        Logger.step('Registrarse con el mismo usuario')
        RegisterMethods.signUp(
            LoginData.userCredentials.username,
            randomEmail,
            randomPassword,
            randomPassword,
            randomBirthDate
        )

        Logger.verification('El email de usuario ya está en uso')
        RegisterMethods.verifyUserAlreadyExist()
    })

})
