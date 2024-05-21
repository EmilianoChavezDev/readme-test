import { Logger } from '../../../../support/logger'
import { LoginData } from '../../../pages/login/login.data'
import { HomeMethods } from '../../../pages/home/home.methods'
import { LoginMethods } from '../../../pages/login/login.methods'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { BookDetailsMethods } from '../../../pages/book-details/book-details.methods'

describe('Remove comment', () => {

    beforeEach(() => {
        Logger.stepNumber(1)
        Logger.step('Navegamos a la pagina de login')
        cy.visit(CommonPageData.appPages.loginUrl)

        Logger.verification('Estamos en la pagina de login')
        cy.url().should('eq', CommonPageData.appPages.loginUrl)

        Logger.stepNumber(2)
        Logger.step('Login con datos validos')
        LoginMethods.login(
        LoginData.validCredentials.username,
        LoginData.validCredentials.password
        )

        Logger.verification('El boton de Escribe del NavBar deberia ser visible')
        NavBarMethods.verifyWriteButton()
    })

    it('Remove comment', () => {
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
            expect(interception.response.statusCode).to.equal(201)
            comentaryId = interception.response.body.comentario.id

            Logger.stepNumber(7)
            Logger.step('Desplegamos el menu')
            BookDetailsMethods.threeDotsClick()

            Logger.stepNumber(8)
            Logger.step('Eliminamos')
            BookDetailsMethods.deleteCommentClick()

            Logger.stepNumber(9)
            Logger.step('Confirmamos eliminar')
            BookDetailsMethods.deleteCommentAcceptClick()

            Logger.verification('Verificamos que el comentario se haya borrado')
            BookDetailsMethods.verifyComentaryRemoveMessage()
        })
    })

})
