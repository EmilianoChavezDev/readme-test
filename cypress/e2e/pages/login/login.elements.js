export class LoginElements {
  // Elementos del formulario de login
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

  // Botones del formulario de login
  static get loginButton() {
    return {
      get loginButton() {
        return cy.get("#login-btn");
      },
    };
  }

  // Mensajes de error del formulario de login
  static get errorMessagess() {
    return {
      get userOrPasswordNotValid() {
        return cy.contains("p", "Usuario o contraseña no valido");
      },
    };
  }
}
