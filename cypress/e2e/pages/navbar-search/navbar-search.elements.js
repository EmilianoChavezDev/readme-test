export class NavBarSearchElements {
  // Botones de filtros
  static get buttons() {
    return {
      get readBook() {
        return cy.get('button[class*="bg-cyan-"]', { timeout: 10000 });
      },

      get viewDetails() {
        return cy.get('a[href*="/books/"]', { timeout: 10000 }).eq(0);
      },

      get reviews() {
        return cy
          .get("div.col-span-12", { timeout: 10000 })
          .find("div.flex.gap-1");
      },

      get applyFilers() {
        return cy.get("button.uppercase", { timeout: 10000 });
      },

      // Select para filtrar por categoria
      get selectInput() {
        return cy.get(".css-19bb58m", { timeout: 10000 });
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
          { timeout: 10000 }
        );
      },
      // Contenedor de resultados si hay resultados
      get resultsFound() {
        return cy.get(".flex.justify-center.flex-col.gap-10.px-10", {
          timeout: 10000,
        });
      },
    };
  }

  // Categorias de libros para filtrar en el select
  static get categories() {
    return {
      get fiction() {
        return cy.get("#react-select-2-option-0", { timeout: 10000 });
      },

      get fantasy() {
        return cy.get("#react-select-2-option-1", { timeout: 10000 });
      },

      get romance() {
        return cy.get("#react-select-2-option-2", { timeout: 10000 });
      },

      get terror() {
        return cy.get("#react-select-2-option-3", { timeout: 10000 });
      },

      get adventure() {
        return cy.get("#react-select-2-option-4", { timeout: 10000 });
      },

      get mistery() {
        return cy.get("#react-select-2-option-5", { timeout: 10000 });
      },

      get humor() {
        return cy.get("#react-select-2-option-6", { timeout: 10000 });
      },

      get history() {
        return cy.get("#react-select-2-option-7", { timeout: 10000 });
      },

      get political() {
        return cy.get("#react-select-2-option-8", { timeout: 10000 });
      },

      get drama() {
        return cy.get("#react-select-2-option-9", { timeout: 10000 });
      },

      get biography() {
        return cy.get("#react-select-2-option-10", { timeout: 10000 });
      },

      get selfBiography() {
        return cy.get("#react-select-2-option-11", { timeout: 10000 });
      },

      get essay() {
        return cy.get("#react-select-2-option-12", { timeout: 10000 });
      },

      get stories() {
        return cy.get("#react-select-2-option-13", { timeout: 10000 });
      },

      get poetry() {
        return cy.get("#react-select-2-option-14", { timeout: 10000 });
      },

      get childrens() {
        return cy.get("#react-select-2-option-15", { timeout: 10000 });
      },

      get youngAdults() {
        return cy.get("#react-select-2-option-16", { timeout: 10000 });
      },
    };
  }
}
