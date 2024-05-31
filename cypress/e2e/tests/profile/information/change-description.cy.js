import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CommonPageMethods } from '../../../pages/common-page/common-page.methods'
import { AccountSettingsMethods } from '../../../pages/account-settings/account-settings.methods'
import { ProfileSettingsMethods } from '../../../pages/profile-settings/profile-settings.methods'

const newDescription = CommonPageMethods.generateRandomString(5)

describe('Change description', () => {

    beforeEach(() => signin())

    it('Change user description', () => {
        Logger.stepNumber(3)
        Logger.step('Vamos a los ajustes de la cuenta')
        NavBarMethods.goToMyProfile()

        Logger.stepNumber(5)
        Logger.step('Damos click en editar perfil')
        ProfileSettingsMethods.editProfileClick()

        Logger.verification('Verificamos que estemos en modo edicion')
        ProfileSettingsMethods.verifyEditProfilePage()

        Logger.stepNumber(5)
        Logger.step('Ingresamos el nuevo nombre')
        ProfileSettingsMethods.insertDescription(`Esta es una nueva descripcion${newDescription}`)

        cy.intercept('PUT', CommonPageData.endPoints.information).as('updateDescription')

        Logger.stepNumber(6)
        Logger.step('Guardamos cambios')
        ProfileSettingsMethods.saveChangesClick()

        Logger.verification('La fecha de nacimiento ha sido actualizada')
        AccountSettingsMethods.verifyDataUpdated()

        cy.wait('@updateDescription').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
        })
    })

})
