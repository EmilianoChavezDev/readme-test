import { Logger } from '../../../support/logger'
import { signin } from '../../../support/commonSetup'
import { CommonPageData } from '../../pages/common-page/common-page.data'

describe('Error 500 handling', () => {

    beforeEach(() => signin())

    it('Page displays error 500 message', () => {
        // Ignorar errores no capturados específicos de NEXT_NOT_FOUND
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('Page is not working')) {
                // Devuelve false para evitar que Cypress falle la prueba
                return false
            }
        })

        Logger.step('Navigate to a page that will throw a 500 error')
        cy.visit(`${CommonPageData.appPages.baseUrl}test_500`, { failOnStatusCode: false })

        Logger.step('Verify that the error message is displayed') 
        cy.contains('Oops! Ha ocurrido un problema', { timeout: 4000 }).should('be.visible')
    })

});
