export class ChaptersElements {
  static get textBoxes() {
    return {
      get title() {
        return cy.get('input[placeholder="Ingrese el título del capítulo"]', {
          timeout: 10000,
        });
      },

      get content() {
        return cy.get('div[data-gramm="false"]', { timeout: 10000 });
      },
    };
  }

  static get buttons() {
    return {
      get publish() {
        return cy.contains("button", "Publicar", { timeout: 10000 });
      },
    };
  }

  static get successMessages() {
    return {
      get publishedChapter() {
        return cy
          .get(".go3958317564")
          .contains("El capítulo de tu libro ha sido publicado");
      },
    };
  }
}
