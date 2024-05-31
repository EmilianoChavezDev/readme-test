import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CreateBookMethods } from '../../../pages/create-book/create-book.methods'

describe('Create book fail', () => {

    beforeEach(() => signin())

    it('Show validation errors for empty fields', () => {
        Logger.stepNumber(3)
        Logger.step('Click en Escribe y en Crear libro nuevo del navbar')
        NavBarMethods.goToWriteBook()

        Logger.verification('La url deberia ser la de creacion de libro')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}books/create`)

        Logger.stepNumber(4)
        Logger.step('Damos click en Seguir sin llenar los campos')
        CreateBookMethods.seguirButtonClick()

        Logger.verification('Deberia mostrar los mensajes de error')
        CreateBookMethods.verifyEmptyTitleError()
        CreateBookMethods.verifyEmptySynopsisError()
        CreateBookMethods.verifyEmptyCategoryError()
    })

})
