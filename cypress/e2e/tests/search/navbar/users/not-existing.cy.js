import { Logger } from '../../../../../support/logger'
import { signin } from '../../../../../support/commonSetup'
import { NavBarMethods } from '../../../../pages/navbar/navbar.methods'
import { NavBarSearchMethods } from '../../../../pages/navbar-search/navbar-search.methods'
import { NavBarSearchUsersMethods } from '../../../../pages/users-serach/narbar-search.users.methods'

describe('Search navbar', () => {

    beforeEach(() => signin())

    it('Search non-existing user', () => {
        Logger.stepNumber(3)
        Logger.step('Buscar un usuario que no exista')
        NavBarMethods.searchUser('usuarioquenoexiste')

        cy.wait(4000)

        Logger.stepNumber(4)
        Logger.step('Vamos al apartado de usuarios')
        NavBarSearchUsersMethods.changeToUsersClick()

        Logger.verification('Verificar que no se encuentre ningun resultado')
        NavBarSearchMethods.verifyResultsNotFound()
    })

})
