export class ModeradorElements {
  // Contenedor de libros de la pagina principal
  static get buttons() {
    return {
      get selectInput() {
        return cy.get('button[classnameprefix="my-react-select"]');
      },
      get selectPendiente() {
        return cy.contains("li", "Pendiente");
      },
    };
  }
  static get clickSelect() {
    return {
      get selectFirst() {
        return cy.contains("td", "Pendiente").eq(0);
      },
      get selectInputDelete() {
        return cy.get("textarea.text-md");
      },
    };
  }
  static get actions() {
    return {
      get changeStateRevision() {
        return cy.contains("button", "En Revisión");
      },
      get changeStateAccept() {
        return cy.contains("button", "Aceptado");
      },
      get changeStatePendiente() {
        return cy.contains("button", "Pendiente");
      },
      get deleteBook() {
        return cy.contains("button", "Desactivar");
      },
      get confirmDelete() {
        return cy.contains("span", "Aceptar");
      },
    };
  }
}
