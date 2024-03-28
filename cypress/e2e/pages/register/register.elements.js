export class RegisterElements {
  // Elementos del formulario de registro
  static get textBoxes() {
    return {
      get username() {
        return cy.get('input[name="username"]', { timeout: 10000 });
      },

      get password() {
        return cy.get('input[name="password"]', { timeout: 10000 });
      },

      get confirmPassword() {
        return cy.get('input[name="password_confirmation"]', {
          timeout: 10000,
        });
      },

      get birthDate() {
        return cy.get('input[name="fecha_nacimiento"]', { timeout: 10000 });
      },
    };
  }

  // Mensajes de error del formulario de registro
  static get errorMessages() {
    return {
      get userAlreadyExist() {
        return cy
          .get("p", { timeout: 10000 })
          .contains("Nombre de usuario en uso");
      },

      get fillAllFields() {
        return cy.contains("p", "Por favor complete todos los campos", {
          timeout: 10000,
        });
      },

      get birthDateEmpty() {
        return cy.get('input[name="fecha_nacimiento"]', { timeout: 10000 });
      },

      get passwordNotMatch() {
        return cy
          .get("p", { timeout: 10000 })
          .contains("Las contraseñas no coinciden");
      },

      get passwordLengthInvalid() {
        return cy.get("div.text-white", { timeout: 10000 });
      },
    };
  }

  // Botones del formulario de registro
  static get registerButton() {
    return {
      get registerButton() {
        return cy.get("#register-btn", { timeout: 10000 });
      },
    };
  }
}
