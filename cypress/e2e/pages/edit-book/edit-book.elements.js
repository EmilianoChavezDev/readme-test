export class EditBookElements {
  static get buttons() {
    return {
      get updateButton() {
        return cy.contains("button", "Actualizar", { timeout: timeout });
      },
    };
  }
}
