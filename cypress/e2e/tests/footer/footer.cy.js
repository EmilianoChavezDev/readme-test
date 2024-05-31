import { Logger } from '../../../support/logger'
import { signin } from '../../../support/commonSetup'
import { FooterMethods } from '../../pages/footer/footer.methods'

describe('Footer links test', () => {

    beforeEach(() => signin())

    it('Click and verify Privacy Policy link', () => {
        Logger.stepNumber(3)
        Logger.step('Click on Privacy Policy link')
        FooterMethods.ClickPrivacyPolicy()

        Logger.stepNumber(4)
        Logger.step('Verify Privacy Policy page is visible')
        cy.url().should('include', '/about/privacy_policy')
        cy.contains('Política de Privacidad', { timeout: 4000 }).should('be.visible')
    })

    it('Click and verify Terms of Service link', () => {
        Logger.stepNumber(5)
        Logger.step('Click on Terms of Service link')
        FooterMethods.ClickTermsOfService()

        Logger.stepNumber(6)
        Logger.step('Verify Terms of Service page is visible')
        cy.url().should('include', '/about/terms_of_service')
        cy.contains('Términos de Servicio', { timeout: 4000 }).should('be.visible')
    })

    it('Click and verify Technologies link', () => {
        Logger.stepNumber(7)
        Logger.step('Click on Technologies link')
        FooterMethods.ClickTechnologies()

        Logger.stepNumber(8)
        Logger.step('Verify Technologies page is visible')
        cy.url().should('include', '/about/tecnologies')
        cy.contains('Tecnologías', { timeout: 4000 }).should('be.visible')
    })

    it('Click and verify FAQ link', () => {
        Logger.stepNumber(9)
        Logger.step('Click on FAQ link')
        FooterMethods.ClickFAQ()

        Logger.stepNumber(10)
        Logger.step('Verify FAQ page is visible')
        cy.url().should('include', '/about/faq')
        cy.contains('Preguntas Frecuentes', { timeout: 4000 }).should('be.visible')
    })

    it('Click and verify Security link', () => {
        Logger.stepNumber(11)
        Logger.step('Click on Security link')
        FooterMethods.ClickSecurity()

        Logger.stepNumber(12)
        Logger.step('Verify Security page is visible')
        cy.url().should('include', '/about/privacy_policy#seguridad-title')
        cy.contains('4. Seguridad', { timeout: 4000 }).should('be.visible')
    })

    it('Click and verify About Us link', () => {
        Logger.stepNumber(13)
        Logger.step('Click on About Us link')
        FooterMethods.ClickAboutUs()

        Logger.stepNumber(14)
        Logger.step('Verify About Us page is visible')
        cy.url().should('include', '/about/about_us')
        cy.contains('Acerca de nosotros', { timeout: 4000 }).should('be.visible')
    })

})