export class FavoritesElements {
  // Botones de favoritos al ver la pagina Mis Favoritos Corazones llenos y vacios)
  static get buttons() {
    return {
      get fullHeartButton() {
        return cy.get('img[alt="Corazón lleno"]', { timeout: 10000 });
      },

      get emptyHeartButton() {
        return cy.get('img[alt="Corazón vacio"]', { timeout: 10000 });
      },
    };
  }

  // Contenedor de libros en favoritos
  static get container() {
    return {
      get bookContainer() {
        return cy.get("div.favorites_contenedor_datos_cuadro__MqGnE img", {
          timeout: 10000,
        });
      },
    };
  }

  // Mensaje de favoritos vacios
  static get emptyFavoritesMessage() {
    return cy.contains(
      "p",
      "Parece que tu lista de favoritos está vacía por ahora. ",
      { timeout: 10000 }
    );
  }
}
