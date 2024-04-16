export class RegisterElements {
  // Elementos del formulario de registro
  static get textBoxes() {
    return {
      get username() {
        return cy.get('input[name="username"]');
      },

      get email() {
        return cy.get('input[name="email"]');
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

  // Mensajes de error del formulario de registro
  static get errorMessages() {
    return {
      get userAlreadyExist() {
        return cy.get("p").contains("Nombre de usuario en uso");
      },

      get fillAllFields() {
        return cy.contains("p", "Por favor complete todos los campos");
      },

      get birthDateEmpty() {
        return cy.get('input[name="fecha_nacimiento"]');
      },

      get passwordNotMatch() {
        return cy.get("p").contains("Las contraseñas no coinciden");
      },

      get passwordLengthInvalid() {
        return cy.get("div.text-white");
      },

      get birthDateInvalid() {
        return cy.contains("p", "Debes tener 15 o mas para");
      },
    };
  }

  // Botones del formulario de registro
  static get registerButton() {
    return {
      get registerButton() {
        return cy.get("#register-btn");
      },
    };
  }
}
