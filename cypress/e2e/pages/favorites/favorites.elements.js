export class FavoritesElements {
  // Botones de favoritos al ver la pagina Mis Favoritos Corazones llenos y vacios)
  static get buttons() {
    return {
      get heart() {
        return cy
          .get("div.favorites_botonContainer__WSkkj button", {
            timeout: 10000,
            multiple: true,
          })
          .find("svg")
          .find("path");
      },
    };
  }

  // Contenedor de libros en favoritos (cuadros de libros)
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
