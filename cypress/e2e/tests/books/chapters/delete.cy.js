import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { MyDeleteChaptersMethods } from '../../../pages/delete-chapter/delete.methods'

describe('Delete chapter', () => {

    beforeEach(() => signin())

    it('Continue writing chapter', () => {
        Logger.stepNumber(3)
        Logger.step('Click en Escribe y en Crear libro nuevo del navbar')
        NavBarMethods.goToMyBooks()

        Logger.verification('La url deberia ser la de mis libros')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}books/mybooks`)

        Logger.stepNumber(4)
        Logger.step('Seleccionamos el libro y damos click en seguir escribiendo')
        MyDeleteChaptersMethods.continueWriting()

        cy.wait(3000)
        Logger.stepNumber(5)
        Logger.step('Abrimos el menu de capitulos del libro')
        MyDeleteChaptersMethods.openMenu()

        Logger.stepNumber(6)
        Logger.step('Abrimos el menu de capitulos del libro')
        MyDeleteChaptersMethods.deleteChapterClick()

        Logger.stepNumber(7)
        Logger.step('Cerramos el menu')
        MyDeleteChaptersMethods.openMenu()

        Logger.stepNumber(8)
        Logger.step('Y lo vuelvo a abrir para comprobar el cambio')
        MyDeleteChaptersMethods.openMenu()
    })

})
