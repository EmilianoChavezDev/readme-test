export class RegisterElements {
  // Elementos del formulario de registro
  static get textBoxes() {
    return {
      get username() {
        return cy.get('input[name="username"]', { timeout: timeout });
      },

      get password() {
        return cy.get('input[name="password"]', { timeout: timeout });
      },

      get confirmPassword() {
        return cy.get('input[name="password_confirmation"]', {
          timeout: timeout,
        });
      },

      get birthDate() {
        return cy.get('input[name="fecha_nacimiento"]', { timeout: timeout });
      },
    };
  }

  // Mensajes de error del formulario de registro
  static get errorMessages() {
    return {
      get userAlreadyExist() {
        return cy
          .get("p", { timeout: timeout })
          .contains("Nombre de usuario en uso");
      },

      get fillAllFields() {
        return cy.contains("p", "Por favor complete todos los campos", {
          timeout: timeout,
        });
      },

      get birthDateEmpty() {
        return cy.get('input[name="fecha_nacimiento"]', { timeout: timeout });
      },

      get passwordNotMatch() {
        return cy
          .get("p", { timeout: timeout })
          .contains("Las contraseñas no coinciden");
      },

      get passwordLengthInvalid() {
        return cy.get("div.text-white", { timeout: timeout });
      },

      get birthDateInvalid() {
        return cy.contains("p", "Debes tener 15 o mas para", {
          timeout: timeout,
        });
      },
    };
  }

  // Botones del formulario de registro
  static get registerButton() {
    return {
      get registerButton() {
        return cy.get("#register-btn", { timeout: timeout });
      },
    };
  }
}
