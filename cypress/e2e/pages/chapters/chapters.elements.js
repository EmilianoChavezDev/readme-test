export class ChaptersElements {
  // Campos de textos de capitulos
  static get textBoxes() {
    return {
      get title() {
        return cy.get('input[placeholder="Ingrese el título del capítulo"]');
      },

      get content() {
        return cy.get('div[data-gramm="false"]');
      },
    };
  }

  // Botones de capitulos
  static get buttons() {
    return {
      get publish() {
        return cy.contains("button", "Publicar");
      },

      get save() {
        return cy.contains("button", "Guardar");
      },

      get dropDown() {
        return cy.get('svg[class="text-2xl hover:cursor-pointer"]');
      },
    };
  }

  // Mensajes de exito
  static get successMessages() {
    return {
      get toast() {
        return cy.get(".go3958317564");
      },
    };
  }

  // Lista de los capitulos en el dropdown
  static get capitulesForSwap() {
    return {
      get firstChapter() {
        return cy.get("p.text-sm").eq(0);
      },

      get secondChapter() {
        return cy.get("p.text-sm").eq(1);
      },
    };
  }
}
