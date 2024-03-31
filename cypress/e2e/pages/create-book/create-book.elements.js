export class CreateBookElements {
  // Elementos del formulario de libros
  static get textBoxes() {
    return {
      get title() {
        return cy.get("#titulo", { timeout: 10000 });
      },

      get sinopsis() {
        return cy.get("#sinopsis", { timeout: 10000 });
      },

      get category() {
        return cy.get("#categoria", { timeout: 10000 });
      },

      get adult() {
        return cy.get("#adulto", { timeout: 10000 });
      },

      get cover() {
        return cy.get('label.bg-ChaptearHeader input[type="file"]', {
          timeout: 10000,
        });
      },
    };
  }

  // Elementos de error de campos vacios
  static get emptyFieldsErrors() {
    return {
      get title() {
        return cy.get("#titulo + p", { timeout: 10000 });
      },

      get sinopsis() {
        return cy.get("#sinopsis + p", { timeout: 10000 });
      },

      get category() {
        return cy.get("#categoria + p", { timeout: 10000 });
      },
    };
  }

  // Obtener el label de portada (Agregar portada / Cambiar portada)
  static get coverPreview() {
    return {
      get cover() {
        return cy.get('label[for="portada"]', { timeout: 10000 });
      },
    };
  }

  // Botones del formulario de libros
  static get bookButtons() {
    return {
      get seguirButton() {
        return cy.get(".bg-BooksCreateSeguirButton", { timeout: 10000 });
      },

      get cancelButton() {
        return cy.contains("Cancelar", { timeout: 10000 });
      },
    };
  }
}
