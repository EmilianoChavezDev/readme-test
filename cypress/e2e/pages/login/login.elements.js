export class LoginElements {
  static get textBoxes() {
    return {
      get username() {
        return cy.get('input[name="username"]');
      },
      get password() {
        return cy.get('input[name="password"]');
      },
    };
  }

  static get loginButton() {
    return {
      get loginButton() {
        return cy.get("#login-btn", { timeout: 10000 });
      },
    };
  }
}
