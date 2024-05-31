import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { NavBarSearchMethods } from '../../../pages/navbar-search/navbar-search.methods'
import { ProfileSettingsMethods } from '../../../pages/profile-settings/profile-settings.methods'
import { NavBarSearchUsersMethods } from '../../../pages/users-serach/narbar-search.users.methods'

describe('Report user', () => {

    beforeEach(() => signin())

    it('Search existing user', () => {
        Logger.stepNumber(3)
        Logger.step('Buscar un usuario cualquiera')
        NavBarMethods.searchUser('gonza')

        Logger.stepNumber(4)
        Logger.step('Vamos al apartado de usuarios')
        NavBarSearchUsersMethods.changeToUsersClick()

        Logger.verification('Verificar que se hizo la busqueda correctamente')
        NavBarSearchMethods.verifySearch('gonza')

        Logger.stepNumber(5)
        Logger.step('Entramos al perfil del usuario')
        NavBarSearchUsersMethods.viewProfile()

        Logger.verification('Verificamos que estemos en el perfil del usuario')
        NavBarSearchUsersMethods.verifyProfile('gonza')

        Logger.stepNumber(6)
        Logger.step('Reportar usuario')
        ProfileSettingsMethods.reportUserClick()

        Logger.stepNumber(7)
        Logger.step('Ingresamos el motivo del reporte')
        ProfileSettingsMethods.insertReport('Este usuario no deberia estar en la plataforma')

        Logger.stepNumber(8)
        Logger.step('Seleccionamos la categoria del reporte')
        ProfileSettingsMethods.getCategory().innapropiateBehavior()

        cy.intercept('POST', CommonPageData.endPoints.userReports).as('createReport')

        Logger.stepNumber(9)
        Logger.step('Click en aceptar')
        ProfileSettingsMethods.createReportClick()

        Logger.verification('Verificar que se haya creado el reporte del usuario')
        ProfileSettingsMethods.verifyReportCreated()

        cy.wait('@createReport').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
        })
    })
})