import { Logger } from '../../../support/logger'
import { signin } from '../../../support/commonSetup'
import { NavBarMethods } from '../../pages/navbar/navbar.methods'
import { MyBooksMethods } from '../../pages/mybooks/mybooks.methods'
import { CommonPageData } from '../../pages/common-page/common-page.data'

describe('Delete book', () => {

    beforeEach(() => signin())

    it('Delete book', () => {
        Logger.stepNumber(3)
        Logger.step('Click en Escribe y en Mis Libros')
        NavBarMethods.goToMyBooks()

        Logger.verification('La url deberia ser la de mis libros')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}books/mybooks`)

        Logger.stepNumber(4)
        Logger.step('Desplegamos el menu de opciones')
        MyBooksMethods.openMenu()

        Logger.stepNumber(5)
        Logger.step('Click en Eliminar libro')
        MyBooksMethods.deleteBookClick()

        Logger.stepNumber(6)
        Logger.step('Click en confirmar eliminar libro')
        MyBooksMethods.confirmDeleteBook()

        Logger.verification('El mensaje de exito deberia ser visible')
        MyBooksMethods.verifyBookDeleted()
    })

})
