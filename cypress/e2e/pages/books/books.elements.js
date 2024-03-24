export class BooksElements {
  static get textBoxes() {
    return {
      get title() {
        return cy.get("#titulo");
      },
      get sinopsis() {
        return cy.get("#sinopsis");
      },
      get category() {
        return cy.get("#categoria");
      },
      get adult() {
        return cy.get("#adulto");
      },
      get cover() {
        return cy.get("#portada");
      },
    };
  }

  static get emptyFieldsError() {
    return {
      get title() {
        return cy.get("#titulo + p");
      },
      get sinopsis() {
        return cy.get("#sinopsis + p");
      },
      get category() {
        return cy.get("#categoria + p");
      },
    };
  }

  static get bookButtons() {
    return {
      get createButton() {
        return cy.get(".bg-BooksCreateSeguirButton", { timeout: 10000 });
      },
      get cancelButton() {
        return cy.contains("Cancelar");
      },
    };
  }
}
