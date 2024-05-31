import { Logger } from '../../../../../support/logger'
import { signin } from '../../../../../support/commonSetup'
import { NavBarMethods } from '../../../../pages/navbar/navbar.methods'
import { NavBarSearchMethods } from '../../../../pages/navbar-search/navbar-search.methods'

describe('Search navbar', () => {

    beforeEach(() => signin())

    it('Search book that doesnt exist', () => {
        Logger.stepNumber(3)
        Logger.step('Buscar el libro Spiderman')
        NavBarMethods.searchBook('Libro no existe')

        Logger.verification('Verificar que se hizo la busqueda correctamente')
        NavBarSearchMethods.verifySearch('Libro no existe')

        Logger.verification('Verificamos que hayan resultados en la busqueda')
        NavBarSearchMethods.verifyResultsNotFound()
    })

})
