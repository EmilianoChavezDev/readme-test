import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { HomeMethods } from '../../../pages/home/home.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { BookDetailsMethods } from '../../../pages/book-details/book-details.methods'

describe('Edit comment', () => {

    beforeEach(() => signin())

    it('Edit comment', () => {
        Logger.stepNumber(3)
        Logger.step('Seleccionamos el primer libro de novedades')
        HomeMethods.getBook('Libro de prueba')

        Logger.verification('La seccion de comentarios deberia estar presente')
        BookDetailsMethods.verifyComentarySection()

        Logger.stepNumber(4)
        Logger.step('Agregamos un comentario')
        BookDetailsMethods.insertComment('Excelente libro')

        cy.intercept('POST', CommonPageData.endPoints.comments).as('postComment')

        cy.wait(2000)

        Logger.stepNumber(5)
        Logger.step('Agregamos un comentario')
        BookDetailsMethods.addCommentClick()

        cy.wait('@postComment').then((interception) => {
            comentaryId = interception.response.body.comentario.id
            expect(interception.response.statusCode).to.equal(201)

            Logger.stepNumber(7)
            Logger.step('Desplegamos el menu')
            BookDetailsMethods.threeDotsClick()

            Logger.stepNumber(8)
            Logger.step('Editamos el comentario')
            BookDetailsMethods.editComment('Excelente libro editado')

            // cy.intercept(
            //   'PUT',
            //   `${CommonPageData.endPoints.comments}/${comentaryId}`
            // ).as('editComment')

            Logger.stepNumber(9)
            Logger.step('Aceptamos el comentario editado')
            BookDetailsMethods.editCommentClick()

            // cy.wait('@editComment').then((interception) => {
            //   expect(interception.response.statusCode).to.equal(200)
            // })
        })
    })

})
