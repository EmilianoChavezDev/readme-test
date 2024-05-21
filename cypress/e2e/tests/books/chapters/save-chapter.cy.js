import { Logger } from '../../../../support/logger'
import { LoginData } from '../../../pages/login/login.data'
import { LoginMethods } from '../../../pages/login/login.methods'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { ChaptersData } from '../../../pages/chapters/chapters.data'
import { ChaptersMethods } from '../../../pages/chapters/chapters.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CreateBookData } from '../../../pages/create-book/create-book.data'
import { CreateBookMethods } from '../../../pages/create-book/create-book.methods'

let bookId

describe('Save chapter', () => {
        
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

    it('Create book and save chapter', () => {
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
            bookId = interception.response.body.id

            Logger.verification('La url deberia ser la de escribir capitulo')
            cy.url().should('eq', `${CommonPageData.appPages.baseUrl}books/${bookId}/chapters/write`)

            Logger.stepNumber(5)
            Logger.step('Insertamos el titulo del capitulo')
            ChaptersMethods.insertTitle(ChaptersData.chapterContent.title)

            Logger.stepNumber(6)
            Logger.step('Insertamos el contenido del capitulo')
            ChaptersMethods.insertContent(ChaptersData.chapterContent.content)

            cy.intercept('POST', CommonPageData.endPoints.chapters).as('saveChapter')

            Logger.stepNumber(7)
            Logger.step('Damos click en Publicar')
            ChaptersMethods.saveButtonClick()

            Logger.verification('El capitulo ha sido publicado')
            ChaptersMethods.verifySavedChapter()

            cy.wait('@saveChapter').then((interception) => {
                expect(interception.response.statusCode).to.equal(201)
            })
        })
    })

})
