export class BookDetailsElements {
  // Botones de favoritos al ver los detalles del liibro
  static get buttons() {
    return {
      get startReading() {
        return cy.contains("button", "Comenzar a leer", { timeout: 10000 });
      },

      get addFavoriteButton() {
        return cy.contains("button", "Añadir a Favoritos", { timeout: 10000 });
      },

      get removeFavoriteButton() {
        return cy.contains("button", "Quitar de Favoritos", { timeout: 10000 });
      },

      get reviews() {
        return cy
          .get("div.col-span-12", { timeout: 10000 })
          .find("div.flex.gap-1");
      },
    };
  }

  // Seccion de comentarios en los detalles del libro
  static get comentarySection() {
    return {
      get comentary() {
        return cy.get('textarea[placeholder="Añadir un comment"]');
      },
    };
  }
}
