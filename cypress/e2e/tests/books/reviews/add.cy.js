import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { HomeMethods } from '../../../pages/home/home.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { BookDetailsMethods } from '../../../pages/book-details/book-details.methods'

describe('Add Review', () => {

    beforeEach(() => signin())

    it('Add review', () => {
        Logger.stepNumber(3)
        Logger.step('Seleccionamos el libro')
        HomeMethods.getBook('Libro de prueba')

        cy.wait(4000)

        Logger.verification('La seccion de comentarios deberia estar presente')
        BookDetailsMethods.verifyComentarySection()

        cy.wait(4000)

        cy.intercept('POST', CommonPageData.endPoints.reviews).as('postReview')

        Logger.stepNumber(4)
        Logger.step('Agregamos una reseña de 5 estrellas')
        BookDetailsMethods.randomReview()

        cy.wait('@postReview').then((interception) => {
            expect(interception.response.statusCode).to.equal(201)
        })
    })
})
