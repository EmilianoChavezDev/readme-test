export class MyBooksElements {
  // Botones de mis libros
  static get buttons() {
    return {
      get threeDots() {
        return cy
          .get(".mybooks_btn_menu__kXK5M", {
            timeout: timeout,
            multiple: true,
          })
          .eq(0);
      },

      get continueWriting() {
        return cy
          .get("div.mybooks_write_content__lGcID a", { timeout: timeout })
          .eq(0);
      },
    };
  }

  // Botones de accion
  static get actionButtons() {
    return {
      get editButton() {
        return cy.get(".mybooks_btn_edition_option__BZsll", {
          timeout: timeout,
        });
      },

      get deleteButton() {
        return cy.get(".mybooks_btn_delete_option__D0CHQ", {
          timeout: timeout,
        });
      },

      get confirmDeleteButton() {
        return cy.get(".mybooks_btn_confirm_delete__B98lD", {
          timeout: timeout,
        });
      },
    };
  }

  // Mensajes de exito
  static get successMessages() {
    return {
      get deleteBook() {
        return cy
          .get(".go3958317564", { timeout: timeout })
          .should("contain", "Libro eliminado exitosamente");
      },
    };
  }
}
