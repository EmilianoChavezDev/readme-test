export class CreateBookElements {
  // Elementos del formulario de libros
  static get textBoxes() {
    return {
      get title() {
        return cy.get("#titulo", { timeout: timeout });
      },

      get synopsis() {
        return cy.get("#sinopsis", { timeout: timeout });
      },

      get category() {
        return cy.get("#categoria", { timeout: timeout });
      },

      get adult() {
        return cy.get("#adulto", { timeout: timeout });
      },

      get cover() {
        return cy.get('label.bg-ChaptearHeader input[type="file"]', {
          timeout: timeout,
        });
      },

      get removeCover() {
        return cy
          .get(".bg-colorPrimario", { timeout: timeout })
          .invoke("removeClass", "hidden");
      },
    };
  }

  // Elementos de error de campos vacios
  static get emptyFieldsErrors() {
    return {
      get title() {
        return cy.get("#titulo + p", { timeout: timeout });
      },

      get synopsis() {
        return cy.get("#sinopsis + p", { timeout: timeout });
      },

      get category() {
        return cy.get("#categoria + p", { timeout: timeout });
      },
    };
  }

  // Obtener el label de portada (Agregar portada / Cambiar portada)
  static get coverPreview() {
    return {
      get cover() {
        return cy.get('label[for="portada"]', { timeout: timeout });
      },
    };
  }

  // Botones del formulario de libros
  static get bookButtons() {
    return {
      get seguirButton() {
        return cy.get(".bg-BooksCreateSeguirButton", { timeout: timeout });
      },

      get cancelButton() {
        return cy.contains("Cancelar", { timeout: timeout });
      },
    };
  }
}
