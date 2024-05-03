export class MyRestoreElements {
  // Botones de mis libros
  static get buttons() {
    return {
      // selecciono la pagina
      get trush() {
        return cy.get("button.flex.items-center").contains("Papelera");
      },
    };
  }

  // Botones de accion
  static get actionButtons() {
    return {
      get selectChapterOption() {
        return cy.get('ul[role="tablist"] li').contains("Capitulos");
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
      get restoreChapter() {
        return cy
          .get(".go3958317564")
          .should("contain", "Capitulo restaurado con éxito");
      },
    };
  }
}
