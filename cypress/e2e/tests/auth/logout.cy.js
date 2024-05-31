import { Logger } from '../../../support/logger'
import { signin } from '../../../support/commonSetup'
import { NavBarMethods } from '../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../pages/common-page/common-page.data'

describe('Logout', () => {

    beforeEach(() => signin())
  
    it('should logout', () => {
        Logger.stepNumber(3)
        Logger.step('Logout')
        NavBarMethods.goToLogout()

        Logger.verification('Deberiamos estar en la pagina de login')
        cy.url().should('eq', CommonPageData.appPages.loginUrl)
    })
    
})