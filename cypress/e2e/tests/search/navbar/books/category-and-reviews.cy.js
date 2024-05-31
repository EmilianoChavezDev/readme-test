import { Logger } from '../../../../../support/logger'
import { signin } from '../../../../../support/commonSetup'
import { NavBarMethods } from '../../../../pages/navbar/navbar.methods'
import { NavBarSearchMethods } from '../../../../pages/navbar-search/navbar-search.methods'

describe('Search navbar', () => {

    beforeEach(() => signin())

    it('Search book per category and reviews', () => {
        Logger.stepNumber(3)
        Logger.step('Buscar un libro cualquiera')
        NavBarMethods.searchBook('a')

        Logger.verification('Verificar que se hizo la busqueda correctamente')
        NavBarSearchMethods.verifySearch('a')

        Logger.stepNumber(4)
        Logger.step('Borramos el input de busqueda')
        NavBarMethods.clearInput()

        Logger.stepNumber(4)
        Logger.step('Le damos click al select')
        NavBarSearchMethods.selectInputClick()

        Logger.stepNumber(5)
        Logger.step('Damos click en la categoria de ficcion')
        NavBarSearchMethods.addCategory().fantasy()

        Logger.stepNumber(6)
        Logger.step('Le damos una calificacion de 5 estrellas al libro')
        NavBarSearchMethods.randomReview()

        Logger.stepNumber(6)
        Logger.step('Damos click en aplicar filtros')
        NavBarSearchMethods.applyReviewsClick()

        Logger.verification('Verificamos que haya encontrado el libro')
        NavBarSearchMethods.verifyBooks('Libro de prueba')

        Logger.verification('Verificamos que hayan resultados en la busqueda')
        NavBarSearchMethods.verifyResults()
    })

})
