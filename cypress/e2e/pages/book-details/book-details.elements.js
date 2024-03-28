export class BookDetailsElements {
  // Botones de favoritos al ver los detalles del liibro
  static get buttons() {
    return {
      get addFavoriteButton() {
        return cy.contains("button", "Añadir a Favoritos", { timeout: 10000 });
      },

      get removeFavoriteButton() {
        return cy.contains("button", "Quitar de Favoritos", { timeout: 10000 });
      },
    };
  }
}
