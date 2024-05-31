import { Logger } from '../../../../../support/logger'
import { signin } from '../../../../../support/commonSetup'
import { NavBarMethods } from '../../../../pages/navbar/navbar.methods'
import { NavBarSearchMethods } from '../../../../pages/navbar-search/navbar-search.methods'
import { NavBarSearchUsersMethods } from '../../../../pages/users-serach/narbar-search.users.methods'

describe('Search navbar', () => {

    beforeEach(() => signin())

    it('Search existing user', () => {
        Logger.stepNumber(3)
        Logger.step('Buscar un usuario cualquiera')
        NavBarMethods.searchUser('gonzatesting')

        Logger.stepNumber(4)
        Logger.step('Vamos al apartado de usuarios')
        NavBarSearchUsersMethods.changeToUsersClick()

        Logger.verification('Verificar que se hizo la busqueda correctamente')
        NavBarSearchMethods.verifySearch('gonzatesting')

        Logger.stepNumber(5)
        Logger.step('Entramos al perfil del usuario')
        NavBarSearchUsersMethods.viewProfile()

        Logger.verification('Verificamos que estemos en el perfil del usuario')
        NavBarSearchUsersMethods.verifyProfile('gonzatesting')
    })

})
