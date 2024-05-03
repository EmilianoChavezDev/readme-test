export class MyBookRestoreElements {
  // Botones de mis libros
  static get buttons() {
    return {
      // selecciono la pagina
      get trush() {
        return cy.get("li.rounded-lg button").eq(2);
      },
    };
  }

  // Botones de accion
  static get actionButtons() {
    return {
      get selectChapterOption() {
        return cy.get('ul[role="tablist"] li').contains("Libros");
      },
      get restore() {
        return cy.contains("button", "Restaurar");
      },

      get openMenu() {
        return cy.get('svg[viewBox="0 0 512 512"]');
      },
    };
  }

  // Mensajes de exito
  static get successMessages() {
    return {
      get restoreBook() {
        return cy
          .get(".go3958317564")
          .should("contain", "Libro restaurado con éxito");
      },
    };
  }
}
