import { Logger } from '../../../../support/logger'
import { LoginData } from '../../../pages/login/login.data'
import { HomeMethods } from '../../../pages/home/home.methods'
import { LoginMethods } from '../../../pages/login/login.methods'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { BookDetailsMethods } from '../../../pages/book-details/book-details.methods'

describe('Add comment', () => {

    beforeEach(() => {
        Logger.stepNumber(1)
        Logger.step('Navegamos a la pagina de login')
        cy.visit(CommonPageData.appPages.loginUrl)

        Logger.verification('Estamos en la pagina de login')
        cy.url().should('eq', CommonPageData.appPages.loginUrl)

        Logger.stepNumber(2)
        Logger.step('Login con datos validos')
        LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password)

        Logger.verification('El boton de Escribe del NavBar deberia ser visible')
        NavBarMethods.verifyWriteButton()
    })

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
