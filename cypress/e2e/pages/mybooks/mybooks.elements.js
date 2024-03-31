export class MyBooksElements {
  // Botones de mis libros
  static get buttons() {
    return {
      get threeDots() {
        return cy
          .get(".mybooks_btn_menu__kXK5M", {
            timeout: 10000,
            multiple: true,
          })
          .eq(0);
      },
    };
  }

  // Botones de accion
  static get actionButtons() {
    return {
      get editButton() {
        return cy.get(".mybooks_btn_edition_option__BZsll", { timeout: 10000 });
      },

      get deleteButton() {
        return cy.get(".mybooks_btn_deletes_option__Q0CHQ", { timeout: 10000 });
      },
    };
  }
}
