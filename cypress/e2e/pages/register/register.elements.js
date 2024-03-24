export class RegisterElements {
  static get textBoxes() {
    return {
      get username() {
        return cy.get('input[name="username"]');
      },
      get password() {
        return cy.get('input[name="password"]');
      },
      get confirmPassword() {
        return cy.get('input[name="password_confirmation"]');
      },
      get birthDate() {
        return cy.get('input[name="fecha_nacimiento"]');
      },
    };
  }

  static get registerButton() {
    return {
      get registerButton() {
        return cy.get("#register-btn", { timeout: 10000 });
      },
    };
  }
}
