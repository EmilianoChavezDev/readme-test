import { Logger } from '../../../support/logger'
import { signin } from '../../../support/commonSetup'
import { NavBarMethods } from '../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../pages/common-page/common-page.data'
import { ModeradorMethods } from '../../pages/moderador/moderador.methods'

describe('Moderador view', () => {

    beforeEach(() => signin())

    it('go to navbar', () => {
        Logger.stepNumber(3)
        Logger.step('Click en las opcines del usuario')
        NavBarMethods.goToModeradorPanel()

        Logger.stepNumber(4)
        Logger.step('Abrimos el select')
        ModeradorMethods.selectInputSelect()

        Logger.verification('La url deberia ser la pagina de mi cuenta')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}moderator/report_tray`)

        Logger.stepNumber(5)
        Logger.step('Seleccionamos la opcion pendiente')
        ModeradorMethods.selectPendienteSelect()

        Logger.stepNumber(6)
        Logger.step('Seleccionamos el primero de la lista')
        ModeradorMethods.selectFirst()

        Logger.stepNumber(7)
        Logger.step('lo ponemos en revision')
        ModeradorMethods.selectEnRevision()

        Logger.stepNumber(8)
        Logger.step('desactivamos el libro')
        ModeradorMethods.selectDeleteBook()

        Logger.stepNumber(9)
        Logger.step('dejamos un comentario')
        ModeradorMethods.selectInputDelete('eliminado')

        Logger.stepNumber(10)
        Logger.step('desactivamos el libro')
        ModeradorMethods.confirmDelete()

        // Logger.verification('Libro restaurado con éxito')
        // MyRestoreMethods.verifyRestoreBook()
    })

})
