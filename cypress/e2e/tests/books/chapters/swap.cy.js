import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { NavBarMethods } from '../../../pages/navbar/navbar.methods'
import { ChaptersData } from '../../../pages/chapters/chapters.data'
import { MyBooksMethods } from '../../../pages/mybooks/mybooks.methods'
import { ChaptersMethods } from '../../../pages/chapters/chapters.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { CreateBookData } from '../../../pages/create-book/create-book.data'
import { CreateBookMethods } from '../../../pages/create-book/create-book.methods'

let bookId

//TODO: Fix drag and drop
describe('Swap chapter', () => {

    beforeEach(() => signin())

    it.skip('Create book and save chapter', () => {
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

        Logger.verification('La url deberia ser la de mis libros')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}books/mybooks`)

        Logger.stepNumber(8)
        Logger.step('Damos click en Seguir escribiendo')
        MyBooksMethods.continueWritingClick()

        Logger.verification('La url deberia ser la de escribir capitulo')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}books/${bookId}/chapters/write`)

        Logger.stepNumber(9)
        Logger.step('Insertamos el titulo del capitulo')
        ChaptersMethods.insertTitle(ChaptersData.chapterContent.title2)

        Logger.stepNumber(10)
        Logger.step('Insertamos el contenido del capitulo')
        ChaptersMethods.insertContent(ChaptersData.chapterContent.content2)

        cy.intercept('POST', CommonPageData.endPoints.chapters).as('saveChapter')

        Logger.stepNumber(11)
        Logger.step('Damos click en Guardar')
        ChaptersMethods.saveButtonClick()

        Logger.stepNumber(12)
        Logger.step('Damos click en Seguir escribiendo')
        MyBooksMethods.continueWritingClick()

        Logger.verification('La url deberia ser la de escribir capitulo')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}books/${bookId}/chapters/write`)

        Logger.stepNumber(13)
        Logger.step('Abrimos el dropdown')
        ChaptersMethods.dropDownClick()

        Logger.stepNumber(14)
        Logger.step('Hacemos el drag and drop del segundo capitulo al primero')

        cy.get('.flex.justify-between.items-center.py-2.px-2.relative:last-of-type')
            .drag('.flex.justify-between.items-center.py-2.px-2.relative:first-of-type')
            .then((success) => {
                assert.isTrue(success)
            })
        })
    })
    
})