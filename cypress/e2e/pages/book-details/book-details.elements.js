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
        return cy.get("div.flex.gap-1").eq(4).find("svg");
      },

      get addComment() {
        return cy.get("div.flex-wrap button");
      },

      get reportBook() {
        return cy.contains("span", "Denunciar este libro");
      },
    };
  }

  // Seccion de comentarios en los detalles del libro
  static get comentarySection() {
    return {
      get comentary() {
        return cy.get('textarea[placeholder="Añadir un comentario"]')
      },

      get editComentaryInput() {
        return cy.get('div[role="dialog"] textarea');
      },

      get threeDots() {
        return cy.get("button.h-9").eq(4);
      },

      get deleteButton() {
        return cy.contains("span", "Eliminar");
      },

      get confirmDeleteButton() {
        return cy.contains("span", "Aceptar");
      },

      get editButton() {
        return cy.contains("span", "Editar");
      },

      get acceptButton() {
        return cy.contains("span", "Aceptar");
      },

      get cancelButton() {
        return cy.get("button.bg-white");
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
        return cy.get(".go2072408551");
      },

      get removeCommentaryMessage() {
        return cy.get(".go2072408551");
      },

      get reportCreated() {
        return cy.get(".go2072408551");
      },
    };
  }

  // Reportar libro seccion
  static get reportSection() {
    return {
      get reportSelect() {
        return cy.get("select.text-xs");
      },

      get reportInput() {
        return cy.get('div[role="dialog"] textarea');
      },

      get createReport() {
        return cy.contains("span", "Aceptar");
      },
    };
  }
}
