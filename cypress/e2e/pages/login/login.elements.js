export class LoginElements {
  // Elementos del formulario de login
  static get textBoxes() {
    return {
      get username() {
        return cy.get('input[name="username"]', { timeout: timeout });
      },

      get password() {
        return cy.get('input[name="password"]', { timeout: timeout });
      },
    };
  }

  // Botones del formulario de login
  static get loginButton() {
    return {
      get loginButton() {
        return cy.get("#login-btn", { timeout: timeout });
      },
    };
  }

  // Mensajes de error del formulario de login
  static get errorMessagess() {
    return {
      get userOrPasswordNotValid() {
        return cy.contains("p", "Usuario o contraseña no valido", {
          timeout: timeout,
        });
      },

      get usernameEmpty() {
        return cy.get("div.Inicio_errors__CGJ_C", { timeout: timeout }).eq(0);
      },

      get passwordEmpty() {
        return cy.get("div.Inicio_errors__CGJ_C", { timeout: timeout }).eq(1);
      },
    };
  }
}
