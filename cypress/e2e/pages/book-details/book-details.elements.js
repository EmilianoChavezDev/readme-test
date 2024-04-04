export class BookDetailsElements {
  // Botones de favoritos al ver los detalles del liibro
  static get buttons() {
    return {
      get startReading() {
        return cy.contains("button", "Comenzar a leer", { timeout: timeout });
      },

      get addFavoriteButton() {
        return cy.contains("button", "Añadir a Favoritos", {
          timeout: timeout,
        });
      },

      get removeFavoriteButton() {
        return cy.contains("button", "Quitar de Favoritos", {
          timeout: timeout,
        });
      },

      get reviews() {
        return cy
          .get("div.col-span-12", { timeout: timeout })
          .find("div.flex.gap-1");
      },
    };
  }

  // Seccion de comentarios en los detalles del libro
  static get comentarySection() {
    return {
      get comentary() {
        return cy.get('textarea[placeholder="Añadir un comment"]', {
          timeout: timeout,
        });
      },
    };
  }
}
