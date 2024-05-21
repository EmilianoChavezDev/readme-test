import { Logger } from '../../../../support/logger'
import { LoginData } from '../../../pages/login/login.data'
import { HomeMethods } from '../../../pages/home/home.methods'
import { LoginMethods } from '../../../pages/login/login.methods'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { BookDetailsMethods } from '../../../pages/book-details/book-details.methods'

let favoriteId

describe('Add Book to favorite', () => {

    beforeEach(() => {
        Logger.stepNumber(1)
        Logger.step('Navegamos a la pagina de login')
        cy.visit(CommonPageData.appPages.loginUrl)

        Logger.verification('Estamos en la pagina de login')
        cy.url().should('eq', CommonPageData.appPages.loginUrl)

        Logger.stepNumber(2)
        Logger.step('Login con credenciales validas')
        LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password)

        Logger.verification('NavBar button Escribe should be visible')
        NavBarMethods.verifyWriteButton()
    })

    it('Add and remove book from the books details', () => {
        Logger.stepNumber(3)
        Logger.step('Seleccionamos el primer libro de novedades')
        HomeMethods.getBook('Libro de prueba')

        cy.wait(4000)

        cy.intercept('POST', CommonPageData.endPoints.favorites).as('addFavorite')

        Logger.stepNumber(4)
        Logger.step('Agregar el libro a favoritos desde los detalles del libro')
        BookDetailsMethods.addFavoriteClick()

        Logger.verification('Verificamos el mensaje de agregado a favoritos')
        BookDetailsMethods.verifyFavoriteAddedMessage()

        cy.wait('@addFavorite').then((interception) => {
            expect(interception.response.statusCode).to.eq(201)
            favoriteId = interception.response.body.favorito.id

            cy.intercept('PUT', `${CommonPageData.endPoints.favorites}/${favoriteId}`).as('removeFavorite')

            Logger.stepNumber(8)
            Logger.step('Removemos el libro de favoritos desde los detalles del libro')
            BookDetailsMethods.removeFavoriteClick()

            Logger.verification('El libro no deberia ser visible en favoritos')
            BookDetailsMethods.verifyFavoriteRemovedMessage()

            cy.wait('@removeFavorite').then((interception) => {
                expect(interception.response.statusCode).to.eq(200)
            })
        })
    })

})
