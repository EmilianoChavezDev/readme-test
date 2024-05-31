import { Logger } from '../../../../../support/logger'
import { signin } from '../../../../../support/commonSetup'
import { NavBarMethods } from '../../../../pages/navbar/navbar.methods'
import { CommonPageData } from '../../../../pages/common-page/common-page.data'
import { LibroMethods } from '../../../../pages/users/solicitud-desbaneo/libro/libro.methods'

describe('Solicitar desbaneo de un comentario', () => {

    beforeEach(() => signin())

    it('go to navbar', () => {
        Logger.stepNumber(3)
        Logger.step('Click en las opcines del usuario')
        NavBarMethods.goToMyAccount()

        Logger.stepNumber(4)
        Logger.step('Seleccionamos el apartado de apelacion')
        LibroMethods.clickApelarSancion()

        Logger.verification('La url deberia ser la pagina de mi cuenta')
        cy.url().should('eq', `${CommonPageData.appPages.baseUrl}appeals/content_appeal`)

        Logger.stepNumber(5)
        Logger.step('Seleccionamos el select')
        LibroMethods.clickSelectOption()

        Logger.stepNumber(6)
        Logger.step('Seleccionamos comentario')
        LibroMethods.selectComentarioOption()

        Logger.stepNumber(7)
        Logger.step('Apelamos uno de la lista')
        LibroMethods.selectOneFromList()

        Logger.stepNumber(8)
        Logger.step('Seleccionamos el boton para apelar')
        LibroMethods.selectApelarSancion()

        Logger.stepNumber(9)
        Logger.step('Ponemos un comentario en nuestra solicitud')
        LibroMethods.insertComment('Por favor necesito un desbaneo de este comentario')

        Logger.stepNumber(10)
        Logger.step('Enviamos la peticion de desbaneo')
        LibroMethods.clickAceptar()

        // Logger.verification('La contraseña ha sido actualizada')
        // LibroMethods.verifyMessageOk()
    })
    
})
