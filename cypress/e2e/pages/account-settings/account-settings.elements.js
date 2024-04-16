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
