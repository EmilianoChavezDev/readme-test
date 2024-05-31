import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { HomeMethods } from '../../../pages/home/home.methods'
import { BookDetailsMethods } from '../../../pages/book-details/book-details.methods'

describe('Add comment', () => {

    beforeEach(() => signin())

    it('Add comment', () => {
        Logger.stepNumber(3)
        Logger.step('Seleccionamos el primer libro de novedades')
        HomeMethods.getBook()

        Logger.verification('La seccion de comentarios deberia estar presente')
        BookDetailsMethods.verifyComentarySection()

        Logger.stepNumber(4)
        Logger.step('Agregamos un comentario')
        BookDetailsMethods.insertComment('Excelente libro')

        //cy.intercept('POST', CommonPageData.endPoints.comments).as('postComment')

        Logger.stepNumber(5)
        Logger.step('Agregamos un comentario')
        BookDetailsMethods.addCommentClick()

        // cy.wait('@postComment').then((interception) => {
        //   expect(interception.response.statusCode).to.equal(201)
        // })
    })
    
})
