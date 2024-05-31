import { Logger } from '../../../support/logger'
import { signin } from '../../../support/commonSetup'
import { LoginData } from '../../pages/login/login.data'
import { NavBarMethods } from '../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../pages/common-page/common-page.data'
import { CommonPageMethods } from '../../pages/common-page/common-page.methods'
import { AccountSettingsMethods } from '../../pages/account-settings/account-settings.methods'
import { AccountSettingsElements } from '../../pages/account-settings/account-settings.elements'

const newUsername = CommonPageMethods.generateRandomString(5)
let previousUsername = ''

describe('Change username', () => {

    beforeEach(() => signin())

    it('Change username', () => {
        Logger.stepNumber(3)
        Logger.step('Vamos a los ajustes de la cuenta')
        NavBarMethods.goToMyAccount()

        Logger.stepNumber(4)
        Logger.step('Vamos a Informacion Personal')
        AccountSettingsMethods.myAccountClick()

        Logger.stepNumber(5)
        Logger.step('Obtenemos y limpiamos el campo de nombre de usuario')
        AccountSettingsElements.textBoxes.username.invoke('val').then(val => {
            previousUsername = val
            AccountSettingsElements.textBoxes.username.clear()

            Logger.stepNumber(6)
            Logger.step('Ponemos el nuevo nombre de usuario')
            AccountSettingsMethods.insertUsername(newUsername)

            Logger.stepNumber(7)
            Logger.step('Insertamos la contrasena actual')
            AccountSettingsMethods.insertPassword(LoginData.userCredentials.password)

            cy.intercept('PUT', CommonPageData.endPoints.username).as('updateUsername')

            Logger.stepNumber(8)
            Logger.step('Guardamos cambios')
            AccountSettingsMethods.saveChangesClick()

            Logger.verification('Username actualizado con exito')
            AccountSettingsMethods.verifyDataUpdated()

            cy.wait('@updateUsername').then((interception) => {
                expect(interception.response.statusCode).to.eq(200)

                Logger.stepNumber(9)
                Logger.step('Volvemos a cambiar el nombre de usuario al anterior')

                // Limpiamos el campo de nombre de usuario
                AccountSettingsElements.textBoxes.username.clear()

                // Ponemos el nombre de usuario anterior
                AccountSettingsMethods.insertUsername(previousUsername)

                // Insertamos la contraseña actual
                AccountSettingsMethods.insertPassword(LoginData.userCredentials.password)

                cy.intercept('PUT', CommonPageData.endPoints.username).as('revertUsername')

                // Guardamos cambios
                AccountSettingsMethods.saveChangesClick()

                Logger.verification('Nombre de usuario actualizado con exito')
                AccountSettingsMethods.verifyDataUpdated()

                cy.wait('@revertUsername').then((revertInterception) => {
                    expect(revertInterception.response.statusCode).to.eq(200)
                })
            })
        })
    })

})