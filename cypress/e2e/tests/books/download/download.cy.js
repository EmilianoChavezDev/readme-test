import path from 'path'
import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'

describe('Download book', () => {

    beforeEach(() => signin())

    it('Download book PDF', () => {
        Logger.stepNumber(3)
        Logger.step('Select first book')
        cy.get('.flex.overflow-x-auto.space-x-6.pl-9.pr-4.pt-3.pb-1 > :first-child').click()

        Logger.stepNumber(4)
        Logger.step('Verify Show books page is visible')
        cy.url().should('include', '/books')

        Logger.stepNumber(4)
        Logger.step('Verify Show books page is visible')
        cy.contains('button', 'Descargar').click()

        Logger.stepNumber(5)
        Logger.step('Verifies that the downloaded book matches the title')
        cy.get('h1')  
            .invoke('text')  
            .then((text) => {  
                const downloadsFolder = Cypress.config('downloadsFolder')
                cy.readFile(path.join(downloadsFolder, `${text}.pdf`)).should('exist')
        })
    })

})
