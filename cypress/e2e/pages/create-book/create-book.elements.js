export class CreateBookElements {
  // Elementos del formulario de libros
  static get textBoxes() {
    return {
      get title() {
        return cy.get("input#titulo");
      },

      get synopsis() {
        return cy.get("#sinopsis");
      },

      get category() {
        return cy.get("#categoria");
      },

      get adult() {
        return cy.get("#adulto");
      },

      get cover() {
        return cy.get('label.bg-ChaptearHeader input[type="file"]');
      },

      get removeCover() {
        return cy.get(".bg-colorPrimario").invoke("removeClass", "hidden");
      },
    };
  }

  // Elementos de error de campos vacios
  static get emptyFieldsErrors() {
    return {
      get title() {
        return cy.contains("p", "El titulo no puede estar vacio. ");
      },

      get synopsis() {
        return cy.contains('p', 'La descripción no puede estar vacio. ')
      },

      get category() {
        return cy.get("#categoria + p");
      },
    };
  }

  // Obtener el label de portada (Agregar portada / Cambiar portada)
  static get coverPreview() {
    return {
      get cover() {
        return cy.get('label[for="portada"]');
      },
    };
  }

  // Botones del formulario de libros
  static get bookButtons() {
    return {
      get seguirButton() {
        return cy.contains('button', 'Seguir')
      },

      get cancelButton() {
        return cy.contains("Cancelar");
      },
    };
  }
}
