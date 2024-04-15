export class BookDetailsElementsNavBarSearchElements {
  // Botones de filtros
  static get buttons() {
    return {
      get readBook() {
        return cy.get('button[class*="bg-cyan-"]');
      },

      get viewDetails() {
        return cy.get('a[href*="/books/"]').eq(0);
      },

      get reviews() {
        return cy.get("div.col-span-12").find("div.flex.gap-1");
      },

      get applyFilers() {
        return cy.get("button.uppercase");
      },

      // Select para filtrar por categoria
      get selectInput() {
        return cy.get(".css-19bb58m");
      },
    };
  }

  // Resultados de la pagina
  static get results() {
    return {
      // Mensaje de no resultados
      get resultsNotFound() {
        return cy.contains(
          "p",
          "No hemos encontrado resultados con los parámetros de búsqueda dados."
        );
      },
      // Contenedor de resultados si hay resultados
      get resultsFound() {
        return cy.contains("span", "resultados");
      },
    };
  }

  // Categorias de libros para filtrar en el select
  static get categories() {
    return {
      get fiction() {
        return cy.get("#react-select-2-option-0");
      },

      get fantasy() {
        return cy.get("#react-select-2-option-1");
      },

      get romance() {
        return cy.get("#react-select-2-option-2");
      },

      get terror() {
        return cy.get("#react-select-2-option-3");
      },

      get adventure() {
        return cy.get("#react-select-2-option-4");
      },

      get mistery() {
        return cy.get("#react-select-2-option-5");
      },

      get humor() {
        return cy.get("#react-select-2-option-6");
      },

      get history() {
        return cy.get("#react-select-2-option-7");
      },

      get political() {
        return cy.get("#react-select-2-option-8");
      },

      get drama() {
        return cy.get("#react-select-2-option-9");
      },

      get biography() {
        return cy.get("#react-select-2-option-10");
      },

      get selfBiography() {
        return cy.get("#react-select-2-option-11");
      },

      get essay() {
        return cy.get("#react-select-2-option-12");
      },

      get stories() {
        return cy.get("#react-select-2-option-13");
      },

      get poetry() {
        return cy.get("#react-select-2-option-14");
      },

      get childrens() {
        return cy.get("#react-select-2-option-15");
      },

      get youngAdults() {
        return cy.get("#react-select-2-option-16");
      },
    };
  }
}
