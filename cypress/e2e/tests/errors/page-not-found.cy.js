import { Logger } from '../../../support/logger'
import { signin } from '../../../support/commonSetup'
import { CommonPageData } from '../../pages/common-page/common-page.data'

describe('Page Not Found error', () => {

    beforeEach(() => signin())

    it('Page Not Found', () => {
        // Ignorar errores no capturados específicos de NEXT_NOT_FOUND
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('NEXT_NOT_FOUND')) {
                // Devuelve false para evitar que Cypress falle la prueba
                return false
            }
        })

        Logger.stepNumber(3)
        Logger.step('Navigate to non-existent page')
        cy.visit(`${CommonPageData.appPages.baseUrl}hola_mundo`, { failOnStatusCode: false })

        Logger.stepNumber(4)
        Logger.step('Verify that Not Found component is visible') 
        cy.url().should('include', '/hola_mundo')
        cy.contains('Oops! Página no encontrada', { timeout: 4000 }).should('be.visible')
    })

})