export class AccountSettingsElements {
  // Botones de la pagina de mi cuenta
  static get buttons() {
    return {
      get myInformation() {
        return cy.get("li.rounded-lg button").eq(0);
      },

      get myStatistics() {
        return cy.get("li.rounded-lg button").eq(1);
      },

      get saveChanges() {
        return cy.get('button[type="submit"]', {
          force: true,
        });
      },

      get cancelChanges() {
        return cy.contains("button", "Cancelar");
      },

      get openDropDown() {
        return cy
          .get("button.chakra-accordion__button")
          .contains("Deseas cambiar tu Contraseña?");
      },
    };
  }

  // Inputs de la pagina de mi cuenta
  static get textBoxes() {
    return {
      get username() {
        return cy.get('input[name="username"]');
      },

      get dateBirth() {
        return cy.get('input[name="fecha_nacimiento"]');
      },

      get oldPassword() {
        return cy.get('input[name="oldPassword"]');
      },

      get newPassword() {
        return cy.get('input[name="newPassword"]');
      },

      get newPasswordConfirm() {
        return cy.get('input[name="confirmNewPassword"]');
      },
    };
  }

  // Botones de la imagen de perfil de la pagina de mi cuenta
  static get profileButtons() {
    return {
      get changeProfile() {
        return cy.get("#profile-input").invoke("removeAttr", "style");
      },

      get removeProfile() {
        return cy
          .get(
            'button[class="absolute top-0 right-0 mt-2 mr-2 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all transform opacity-100 duration-700"][style="z-index: 50;"]'
          )
          .contains("Borrar foto de perfil");
      },
    };
  }

  // Mensajes de error de la pagina de mi cuenta
  static get errorMessages() {
    return {
      get incorrectPassword() {
        return cy.get(".go3958317564");
      },

      get passwordNotMatch() {
        return cy.get(".go2072408551");
      },
    };
  }

  // Mensajes de exito de la pagina de mi cuenta
  static get successMessages() {
    return {
      get dataUpdated() {
        return cy.get(".go2072408551");
      },
    };
  }
}
