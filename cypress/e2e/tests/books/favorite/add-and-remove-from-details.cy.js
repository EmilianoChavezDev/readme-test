import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { HomeMethods } from '../../../pages/home/home.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { BookDetailsMethods } from '../../../pages/book-details/book-details.methods'

let favoriteId

describe('Add Book to favorite', () => {

    beforeEach(() => signin())

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
