import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { HomeMethods } from '../../../pages/home/home.methods'
import { CommonPageData } from '../../../pages/common-page/common-page.data'
import { BookDetailsMethods } from '../../../pages/book-details/book-details.methods'

describe('Report Book', () => {

    beforeEach(() => signin())

    it('Report book', () => {
        Logger.stepNumber(3)
        Logger.step('Seleccionamos el libro de novedades')
        HomeMethods.getBook('Libro de prueba')

        Logger.stepNumber(4)
        Logger.step('Click en denunciar libro')
        BookDetailsMethods.reportBookClick()

        Logger.stepNumber(5)
        Logger.step('Insertamos el motivo del reporte')
        BookDetailsMethods.insertReport('Pruebas automatizadas')

        Logger.stepNumber(6)
        Logger.step('Agregamos el motivo')
        BookDetailsMethods.getCategory().other()

        cy.intercept('POST', CommonPageData.endPoints.bookReports).as('createReport')

        Logger.stepNumber(7)
        Logger.step('Click en aceptar')
        BookDetailsMethods.createReportClick()

        Logger.verification('Verificamos que se haya creado el reporte del libro')
        BookDetailsMethods.verifyReportCreated()

        cy.wait('@createReport').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
        })
    })

})
