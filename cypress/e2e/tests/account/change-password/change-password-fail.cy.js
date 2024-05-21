import { Logger } from '../../../../support/logger'
import { LoginData } from '../../../pages/login/login.data'
import { LoginMethods } from '../../../pages/login/login.methods'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CommonPageMethods } from '../../../pages/common-page/common-page.methods'
import { AccountSettingsMethods } from '../../../pages/account-settings/account-settings.methods'

const generateNewPassword = CommonPageMethods.generateRandomString()

describe('Change password fail', () => {

    beforeEach(() => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de login')
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
    })

    it('Change password actual password incorrect', () => {
        Logger.stepNumber(3)
        Logger.step('Vamos a los ajustes de la cuenta')
        NavBarMethods.goToMyAccount()

        Logger.stepNumber(4)
        Logger.step('Vamos a Informacion Personal')
        AccountSettingsMethods.myAccountClick()

        cy.wait(4000)

        Logger.stepNumber(5)
        Logger.step('Insertamos la contrasena actual')
        AccountSettingsMethods.insertPassword('incorrectPassword')

        Logger.stepNumber(6)
        Logger.step('Abrir dropdown de cambio de contraseña')
        AccountSettingsMethods.openDropDownClick()

        cy.wait(4000)

        Logger.stepNumber(7)
        Logger.step('Ingresamos la nueva contraseña')
        AccountSettingsMethods.updateUserPassword(generateNewPassword, generateNewPassword)

        cy.intercept('PUT', CommonPageData.endPoints.password).as('updatePassword')

        Logger.stepNumber(8)
        Logger.step('Guardamos cambios')
        AccountSettingsMethods.saveChangesClick()

        cy.wait(4000)

        Logger.verification('La contraseña no ha sido actualizada')
        AccountSettingsMethods.verifyActualPassword()

        cy.wait('@updatePassword').then((interception) => {
            expect(interception.response.statusCode).to.eq(422)
        })
    })

    it('Change password new password doesnt match', () => {
        Logger.stepNumber(3)
        Logger.step('Vamos a los ajustes de la cuenta')
        NavBarMethods.goToMyAccount()

        Logger.stepNumber(4)
        Logger.step('Vamos a Informacion Personal')
        AccountSettingsMethods.myAccountClick()

        cy.wait(4000)

        Logger.stepNumber(5)
        Logger.step('Insertamos la contraseña actual')
        AccountSettingsMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(6)
        Logger.step('Abrir dropdown de cambio de contraseña')
        AccountSettingsMethods.openDropDownClick()

        cy.wait(4000)

        Logger.stepNumber(7)
        Logger.step('Ingresamos la nueva contraseña')
        AccountSettingsMethods.updateUserPassword('incorrectPassword', 'asdasdad')

        Logger.stepNumber(8)
        Logger.step('Guardamos cambios')
        AccountSettingsMethods.saveChangesClick()

        cy.wait(4000)

        Logger.verification('La contraseña no ha sido actualizada')
        AccountSettingsMethods.verifyPasswordsDontMatch()
    })
    
})
