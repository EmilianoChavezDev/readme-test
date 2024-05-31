import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { MyRestoreMethods } from '../../../pages/restore-chapter/restore.methods'

describe('Restore chapter', () => {

    beforeEach(() => signin())

    it('go to navbar', () => {
        Logger.stepNumber(3)
        Logger.step('Click en Escribe y en Crear libro nuevo del navbar')
        NavBarMethods.goToMyAccount()

        Logger.stepNumber(4)
        Logger.step('Entramos a la pagina de Papelera')
        MyRestoreMethods.openTrushPage()

        Logger.verification('La url deberia ser la pagina de mi cuenta')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}books/recycle`)

        Logger.stepNumber(5)
        Logger.step('Seleccionamos la opcion de restauracion de capitulos')
        MyRestoreMethods.selectChapeterRestored()

        Logger.stepNumber(6)
        Logger.step('Restauramos el capitulo')
        MyRestoreMethods.restore()

        Logger.verification('Capitulo restaurado con éxito')
        MyRestoreMethods.verifyRestoreChapter()
    })

})
