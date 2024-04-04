export class ChaptersElements {
  // Campos de textos de capitulos
  static get textBoxes() {
    return {
      get title() {
        return cy.get('input[placeholder="Ingrese el título del capítulo"]', {
          timeout: timeout,
        });
      },

      get content() {
        return cy.get('div[data-gramm="false"]', { timeout: timeout });
      },
    };
  }

  // Botones de capitulos
  static get buttons() {
    return {
      get publish() {
        return cy.contains("button", "Publicar", { timeout: timeout });
      },

      get save() {
        return cy.contains("button", "Guardar", { timeout: timeout });
      },
    };
  }

  // Mensajes de exito
  static get successMessages() {
    return {
      get toast() {
        return cy.get(".go3958317564", { timeout: timeout });
      },
    };
  }
}
