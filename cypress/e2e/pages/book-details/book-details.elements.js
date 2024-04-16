export class BookDetailsElements {
  // Botones de favoritos al ver los detalles del liibro
  static get buttons() {
    return {
      get startReading() {
        return cy.contains("button", "Comenzar a Leer");
      },

      get addFavoriteButton() {
        return cy.contains("button", "Añadir a Favoritos");
      },

      get removeFavoriteButton() {
        return cy.contains("button", "Quitar de Favoritos");
      },

      get reviews() {
        return cy.get("div.flex.gap-1");
      },

      get addComment() {
        return cy.get("button.rounded-lg");
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

  // Mensajes de favoritos
  static get messages() {
    return {
      get addedFavoriteMessage() {
        return cy.get(".go3958317564");
      },

      get removeFavoriteMessage() {
        return cy.get(".go2072408551 ");
      },
    };
  }
}
