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
        return cy.get("#login-btn", { timeout: 10000 });
      },
    };
  }

  // Mensajes de error del formulario de login
  static get errorMessagess() {
    return {
      get userOrPasswordNotValid() {
        return cy.contains("p", "Usuario o contraseña no valido", {
          timeout: 10000,
        });
      },

      get usernameEmpty() {
        return cy.get("div.Inicio_errors__CGJ_C", { timeout: 10000 }).eq(0);
      },

      get passwordEmpty() {
        return cy.get("div.Inicio_errors__CGJ_C", { timeout: 10000 }).eq(1);
      },
    };
  }
}
