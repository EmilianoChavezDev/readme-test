import { NavBarSearchElements } from "./navbar-search.elements";

export class NavBarSearchMethods {
  // Damos click en aplicar filtros
  static applyReviewsClick() {
    NavBarSearchElements.buttons.applyFilers.click();
  }

  // Damos click en el input de busqueda
  static selectInputClick() {
    NavBarSearchElements.buttons.selectInput.click();
  }

  // Vemos los detalles del primer resultado
  static viewDetails() {
    NavBarSearchElements.buttons.viewDetails.click();
  }

  // Vamos al apartado de leer libro
  static readBook() {
    NavBarSearchElements.buttons.readBook.click();
  }

  // Metodo para generar una review aleatoria
  static randomReview() {
    const randomReview = Math.floor(Math.random() * 5);
    NavBarSearchElements.buttons.reviews.eq(randomReview).click();
  }

  // Insertar una categoria en el select
  static addCategory() {
    return {
      fiction: () => {
        NavBarSearchElements.categories.fiction.click();
      },

      fantasy: () => {
        NavBarSearchElements.categories.fantasy.click();
      },

      romance: () => {
        NavBarSearchElements.categories.romance.click();
      },

      terror: () => {
        NavBarSearchElements.categories.terror.click();
      },

      adventure: () => {
        NavBarSearchElements.categories.adventure.click();
      },

      mistery: () => {
        NavBarSearchElements.categories.mistery.click();
      },

      humor: () => {
        NavBarSearchElements.categories.humor.click();
      },

      history: () => {
        NavBarSearchElements.categories.history.click();
      },

      political: () => {
        NavBarSearchElements.categories.political.click();
      },

      drama: () => {
        NavBarSearchElements.categories.drama.click();
      },

      biografy: () => {
        NavBarSearchElements.categories.biography.click();
      },

      selfBiografy: () => {
        NavBarSearchElements.categories.selfBiography.click();
      },

      essay: () => {
        NavBarSearchElements.categories.essay.click();
      },

      stories: () => {
        NavBarSearchElements.categories.stories.click();
      },

      poetry: () => {
        NavBarSearchElements.categories.poetry.click();
      },

      childrens: () => {
        NavBarSearchElements.categories.childrens.click();
      },

      youngAdults: () => {
        NavBarSearchElements.categories.youngAdults.click();
      },
    };
  }

  // Verificaciones
  // Verificmos si se realizo la busqueda
  static verifySearch(searchText) {
    cy.contains("h3", `Resultados de la Búsqueda "${searchText}"`).should(
      "be.visible"
    );
  }

  // Verificamos si hay resultados en la busqueda
  static verifyResults() {
    NavBarSearchElements.results.resultsFound.should("be.visible");
  }

  // Verificamos si esta el libro que buscamos
  static verifyBooks(name) {
    cy.contains("h5", `${name}`).should("be.visible");
  }

  // Verificamos si no hay resultados en la busqueda
  static verifyResultsNotFound() {
    NavBarSearchElements.results.resultsNotFound.should("be.visible");
  }
}
