export class AccountSettingsElements {
  // Botones de la pagina de mi cuenta
  static get buttons() {
    return {
      get myInformation() {
        return cy.get("li.rounded-lg button", { timeout: 10000 }).eq(0);
      },

      get myStatistics() {
        return cy.get("li.rounded-lg button", { timeout: 10000 }).eq(1);
      },

      get saveChanges() {
        return cy.get('button[type="submit"]', { timeout: 10000 });
      },

      get cancelChanges() {
        return cy.contains("button", "Cancelar", { timeout: 10000 });
      },

      get openDropDown() {
        return cy
          .get("button.chakra-accordion__button", { timeout: 10000 })
          .contains("Deseas cambiar tu Contraseña?");
      },
    };
  }

  // Inputs de la pagina de mi cuenta
  static get textBoxes() {
    return {
      get username() {
        return cy.get('input[name="username"]', { timeout: 10000 });
      },

      get dateBirth() {
        return cy.get('input[name="fecha_nacimiento"]', { timeout: 10000 });
      },

      get oldPassword() {
        return cy.get('input[name="oldPassword"]', { timeout: 10000 });
      },

      get newPassword() {
        return cy.get('input[name="newPassword"]', { timeout: 10000 });
      },

      get newPasswordConfirm() {
        return cy.get('input[name="confirmNewPassword"]', { timeout: 10000 });
      },
    };
  }

  // Botones de la imagen de perfil de la pagina de mi cuenta
  static get profileButtons() {
    return {
      get changeProfile() {
        return cy
          .get("#profile-input", { timeout: 10000 })
          .invoke("removeAttr", "style");
      },

      get removeProfile() {
        return cy
          .get(
            'button[class="absolute top-0 right-0 mt-2 mr-2 p-2 rounded-full bg-red-500 text-white hover:bg-red-600"][style="z-index: 50;"]',
            { timeout: 10000 }
          )
          .contains("Borrar perfil");
      },
    };
  }

  // Mensajes de error de la pagina de mi cuenta
  static get errorMessages() {
    return {
      get incorrectPassword() {
        return cy.get(".go3958317564", { timeout: 10000 });
      },
    };
  }

  // Mensajes de exito de la pagina de mi cuenta
  static get successMessages() {
    return {
      get profileUpdate() {
        return cy.get(".go2072408551", { timeout: 10000 });
      },
    };
  }
}
