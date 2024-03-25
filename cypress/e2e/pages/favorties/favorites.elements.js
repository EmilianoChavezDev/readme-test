export class FavoritesElements {
  static get buttons() {
    return {
      // Botones de la pagina del libro
      get addFavoriteButton() {
        return cy.contains("button", "Añadir a Favoritos");
      },
      get removeFavoriteButton() {
        return cy.contains("button", "Quitar de Favoritos");
      },

      // Botones de la pagina de favoritos
      get fullHeartButton() {
        return cy.get('img[alt="Corazón lleno"]');
      },
      get emptyHeartButton() {
        return cy.get('img[alt="Corazón vacio"]');
      },
    };
  }
}
