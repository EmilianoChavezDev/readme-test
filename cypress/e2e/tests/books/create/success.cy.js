import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CreateBookData } from '../../../pages/create-book/create-book.data'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CreateBookMethods } from '../../../pages/create-book/create-book.methods'

describe('Create book', () => {

    beforeEach(() => signin())

    it('Create book', () => {

        Logger.stepNumber(3)
        Logger.step('Click en Escribe y en Crear libro nuevo del navbar')
        NavBarMethods.goToWriteBook()

        Logger.verification('La url deberia ser la de creacion de libro')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}books/create`)

        Logger.stepNumber(4)
        Logger.step('Llenamos el formulario y damos click en Seguir')
        cy.intercept('POST', CommonPageData.endPoints.books).as('createBook')

        CreateBookMethods.createBook(
            CreateBookData.bookData.title,
            CreateBookData.bookData.synopsis,
            CreateBookData.bookData.category,
            CreateBookData.bookData.cover
        )

        cy.wait('@createBook').then((interception) => {
        expect(interception.response.statusCode).to.equal(201)
        })
    })
})
