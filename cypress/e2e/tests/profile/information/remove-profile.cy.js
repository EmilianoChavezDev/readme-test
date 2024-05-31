import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { AccountSettingsData } from '../../../pages/account-settings/account-settings.data'
import { AccountSettingsMethods } from '../../../pages/account-settings/account-settings.methods'
import { ProfileSettingsMethods } from '../../../pages/profile-settings/profile-settings.methods'

describe('Remove profile', () => {

    beforeEach(() => signin())

    it('Remove user profile', () => {
        Logger.stepNumber(3)
        Logger.step('Vamos a los ajustes de la cuenta')
        NavBarMethods.goToMyProfile()

        Logger.stepNumber(4)
        Logger.step('Damos click en editar perfil')
        ProfileSettingsMethods.editProfileClick()

        Logger.verification('Verificamos que estemos en modo edicion')
        ProfileSettingsMethods.verifyEditProfilePage()

        Logger.stepNumber(5)
        Logger.step('Ingresamos la foto de perfil')
        ProfileSettingsMethods.changeProfilePicture(AccountSettingsData.accountData.profile)

        cy.intercept('PUT', CommonPageData.endPoints.profile).as('changeProfile')

        Logger.stepNumber(6)
        Logger.step('Guardamos cambios')
        ProfileSettingsMethods.saveChangesClick()

        Logger.verification('Datos guardados correctamente')
        AccountSettingsMethods.verifyDataUpdated()

        cy.wait('@changeProfile').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })

        Logger.stepNumber(7)
        Logger.step('Damos click en editar perfil')
        ProfileSettingsMethods.editProfileClick()

        Logger.verification('Verificamos que estemos en modo edicion')
        ProfileSettingsMethods.verifyEditProfilePage()

        Logger.stepNumber(8)
        Logger.step('Damos click en eliminar foto de perfil')
        ProfileSettingsMethods.removeProfilePictureClick()

        cy.intercept('POST', CommonPageData.endPoints.deleteProfile).as('deleteProfile')

        Logger.stepNumber(9)
        Logger.step('Guardamos cambios')
        ProfileSettingsMethods.saveChangesClick()

        Logger.verification('Datos guardados correctamente')
        AccountSettingsMethods.verifyDataUpdated()

        cy.wait('@deleteProfile').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })
    })

})
