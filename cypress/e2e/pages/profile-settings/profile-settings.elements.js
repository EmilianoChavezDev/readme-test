export class ProfileSettingsElements {
  static get buttons() {
    return {
      get editProfileButton() {
        return cy.contains("span", "Editar Perfil");
      },

      get saveChangesButton() {
        return cy.get("div.mx-auto div").eq(2);
      },

      get coverPicture() {
        return cy.contains("span", "Editar foto de portada");
      },
    };
  }

  // Inputs de editar perfil
  static get textBoxes() {
    return {
      get nameInput() {
        return cy.get('input[name="nombre"]');
      },

      get directionInput() {
        return cy.get('input[name="direccion"]');
      },

      get nationalityInput() {
        return cy.get('input[name="nacionalidad"]');
      },

      get birthDateInput() {
        return cy.get('input[name="fecha_nacimiento"]');
      },

      get descriptionInput() {
        return cy.get("textarea#descripcion");
      },
    };
  }

  // Foto de perfil y portada
  static get profilePictures() {
    return {
      get profilePicture() {
        return cy.get("#profile-input");
      },

      get removeProfilePicture() {
        return cy.contains("button", "Eliminar foto de perfil");
      },

      get uploadCoverPicture() {
        return cy.get("#portada-input");
      },

      get removeCoverPicture() {
        return cy.contains("span", "Eliminar foto de portada");
      },
    };
  }

  // Verificamos si estamos en modo de edicion
  static get editMode() {
    return {
      get editModeMessage() {
        return cy.get("div.mx-auto div").eq(1);
      },
    };
  }

  // Elementos de la seccion de mi perfil
  static get profileSection() {
    return {
      get profileUsername() {
        return cy.get("span.text-md");
      },
    };
  }
}
