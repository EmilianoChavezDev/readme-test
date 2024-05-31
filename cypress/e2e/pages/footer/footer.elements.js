export class FooterLinks {

    static get links() {
        return {
            get email() {
                return 'readmeapp.social@gmail.com'
            },
            get privacyPolicy() {
                return cy.contains('a', 'Politica y Privacidad').should('have.attr', 'href', '/about/privacy_policy')
            },
            get termsOfService() {
                return cy.contains('a', 'Términos de servicio').should('have.attr', 'href', '/about/terms_of_service')
            },
            get technologies() {
                return cy.contains('a', 'Tecnologías').should('have.attr', 'href', '/about/tecnologies')
            },
            get faq() {
                return cy.contains('a', 'Preguntas Frecuentes').should('have.attr', 'href', '/about/faq')
            },
            get security() {
                return cy.contains('a', 'Seguridad').should('have.attr', 'href', '/about/privacy_policy#seguridad-title')
            },
            get aboutUs() {
                return cy.contains('a', 'Sobre Nosotros').should('have.attr', 'href', '/about/about_us')
            },
            get instagram() {
                return cy.contains('a', 'Readme').should('have.attr', 'href', 'https://www.instagram.com/gonzacms')
            },
            get twitter() {
                return cy.contains('a', 'Readme').should('have.attr', 'href', 'https://x.com/Gonzq_')
            }
        }
    }

}
