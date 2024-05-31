import { Logger } from '../../../../support/logger'
import { signin } from '../../../../support/commonSetup'
import { BookMethods } from '../../../pages/show-book/show.methods'

describe('Enable Reminder book', () => {

    beforeEach(() => signin())

    it('Enable Reminder book', () => {
        Logger.stepNumber(3)
        Logger.step('Select first book')
        cy.get('.flex.overflow-x-auto.space-x-6.pl-9.pr-4.pt-3.pb-1 > :first-child').click()

        Logger.stepNumber(4)
        Logger.step('Verify Show books page is visible')
        cy.url().should('include', '/books')

        Logger.stepNumber(5)
        Logger.step('Enable Reminders')
        cy.get('.mt-4.h-8.w-8.flex.justify-center.items-center.bg-transparent.border-none.outline-none').click()
        BookMethods.verifyNotificationEnabled()

        Logger.stepNumber(5)
        Logger.step('Enable Reminders')
        cy.get('.mt-4.h-8.w-8.flex.justify-center.items-center.bg-transparent.border-none.outline-none').click()
        BookMethods.verifyNotificationDisabled()
    })

})
