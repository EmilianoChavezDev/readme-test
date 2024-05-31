import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CreateBookMethods } from '../../../pages/create-book/create-book.methods'

describe('Create book cancel', () => {

    beforeEach(() => signin())

    it('Redirect to home page when cancel button is clicked', () => {
        Logger.stepNumber(3)
        Logger.step('Click en Escribe y en Crear libro nuevo del navbar')
        NavBarMethods.goToWriteBook()

        Logger.verification('La url deberia ser la de creacion de libro')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}books/create`)

        Logger.stepNumber(4)
        Logger.step('Damos click en Cancelar')
        CreateBookMethods.cancelButtonClick()

        Logger.verification('La url deberia ser la misma que la de home')
        cy.url().should('eq', CommonPageData.appPages.baseUrl)
    })

})
