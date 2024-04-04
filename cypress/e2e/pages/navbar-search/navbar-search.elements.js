export class NavBarSearchElements {
  // Botones de filtros
  static get buttons() {
    return {
      get readBook() {
        return cy.get('button[class*="bg-cyan-"]', { timeout: timeout });
      },

      get viewDetails() {
        return cy.get('a[href*="/books/"]', { timeout: timeout }).eq(0);
      },

      get reviews() {
        return cy
          .get("div.col-span-12", { timeout: timeout })
          .find("div.flex.gap-1");
      },

      get applyFilers() {
        return cy.get("button.uppercase", { timeout: timeout });
      },

      // Select para filtrar por categoria
      get selectInput() {
        return cy.get(".css-19bb58m", { timeout: timeout });
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
          "No hemos encontrado resultados con los parámetros de búsqueda dados.",
          { timeout: timeout }
        );
      },
      // Contenedor de resultados si hay resultados
      get resultsFound() {
        return cy.get(".flex.justify-center.flex-col.gap-10.px-10", {
          timeout: timeout,
        });
      },
    };
  }

  // Categorias de libros para filtrar en el select
  static get categories() {
    return {
      get fiction() {
        return cy.get("#react-select-2-option-0", { timeout: timeout });
      },

      get fantasy() {
        return cy.get("#react-select-2-option-1", { timeout: timeout });
      },

      get romance() {
        return cy.get("#react-select-2-option-2", { timeout: timeout });
      },

      get terror() {
        return cy.get("#react-select-2-option-3", { timeout: timeout });
      },

      get adventure() {
        return cy.get("#react-select-2-option-4", { timeout: timeout });
      },

      get mistery() {
        return cy.get("#react-select-2-option-5", { timeout: timeout });
      },

      get humor() {
        return cy.get("#react-select-2-option-6", { timeout: timeout });
      },

      get history() {
        return cy.get("#react-select-2-option-7", { timeout: timeout });
      },

      get political() {
        return cy.get("#react-select-2-option-8", { timeout: timeout });
      },

      get drama() {
        return cy.get("#react-select-2-option-9", { timeout: timeout });
      },

      get biography() {
        return cy.get("#react-select-2-option-10", { timeout: timeout });
      },

      get selfBiography() {
        return cy.get("#react-select-2-option-11", { timeout: timeout });
      },

      get essay() {
        return cy.get("#react-select-2-option-12", { timeout: timeout });
      },

      get stories() {
        return cy.get("#react-select-2-option-13", { timeout: timeout });
      },

      get poetry() {
        return cy.get("#react-select-2-option-14", { timeout: timeout });
      },

      get childrens() {
        return cy.get("#react-select-2-option-15", { timeout: timeout });
      },

      get youngAdults() {
        return cy.get("#react-select-2-option-16", { timeout: timeout });
      },
    };
  }
}
