import { ProfileSettingsElements } from "./profile-settings.elements";

export class ProfileSettingsMethods {
  // Activamos el modo de edicion
  static editProfileClick() {
    ProfileSettingsElements.buttons.editProfileButton.click();
  }

  //Guardamos los cambios
  static saveChangesClick() {
    ProfileSettingsElements.buttons.saveChangesButton.click();
  }

  // Click en editar foto de portada
  static editCoverPictureClick() {
    ProfileSettingsElements.buttons.coverPicture.click();
  }

  // Click en eliminar foto de perfil
  static removeProfilePictureClick() {
    ProfileSettingsElements.profilePictures.removeProfilePicture.click();
  }

  // Click en eliminar foto de portada
  static removeCoverPictureClick() {
    ProfileSettingsElements.profilePictures.removeCoverPicture.click();
  }

  // Click en reportar usuario
  static reportUserClick() {
    ProfileSettingsElements.profileSection.reportButton.click();
  }

  // Click en aceptar reporte
  static createReportClick() {
    ProfileSettingsElements.reportSection.createReportButton.click();
  }

  // Cambiamos la foto de perfil
  static changeProfilePicture(picture) {
    ProfileSettingsElements.profilePictures.profilePicture
      .click({ force: true })
      .attachFile(picture);
  }

  // Cambiamos la foto de portada
  static changeCoverPicture(cover) {
    ProfileSettingsElements.profilePictures.uploadCoverPicture
      .click({ force: true })
      .attachFile(cover);
  }

  // Insertamos el motivo del reporte
  static insertReport(reason) {
    ProfileSettingsElements.reportSection.reportInput.type(reason);
  }

  // Cambiamos el nombre de perfil
  static insertName(name) {
    ProfileSettingsElements.textBoxes.nameInput.clear().type(name);
  }

  // Cambiamos la direccion
  static insertDirection(direction) {
    ProfileSettingsElements.textBoxes.directionInput.clear().type(direction);
  }

  // Cambiamos la nacionalidad
  static insertNationality(nationality) {
    ProfileSettingsElements.textBoxes.nationalityInput
      .clear()
      .type(nationality);
  }

  // Cambiamos la descripcion
  static insertDescription(description) {
    ProfileSettingsElements.textBoxes.descriptionInput
      .clear()
      .type(description);
  }

  // Ingresamos la fecha de nacimiento
  static insertBirthDate(birth_date) {
    ProfileSettingsElements.textBoxes.birthDateInput.type(birth_date);
  }

  // Verificaciones
  // Verificamos que estemos en la pagina de editar perfil
  static verifyEditProfilePage() {
    ProfileSettingsElements.editMode.editModeMessage.should(
      "have.text",
      "Estas editando tu perfil ahora"
    );
  }

  // Verificamos que el reporte se haya enviado correctamente
  static verifyReportCreated() {
    ProfileSettingsElements.reportSection.reportMessages.reportSuccess.should(
      "contain.text",
      "Usuario Reportado"
    );
  }

  // Categoria de reporte de usuario
  static getCategory() {
    return {
      innapropiateBehavior: () => {
        ProfileSettingsElements.reportSection.reportSelect.select(
          "Comportamiento inapropiado"
        );
      },

      identityFraud: () => {
        ProfileSettingsElements.reportSection.reportSelect.select(
          "Suplantación de identidad"
        );
      },

      inapropiateContent() {
        ProfileSettingsElements.reportSection.reportSelect.select(
          "Publicación de contenido inapropiado"
        );
      },

      harassment() {
        ProfileSettingsElements.reportSection.reportSelect.select("Acoso");
      },

      spam() {
        ProfileSettingsElements.reportSection.reportSelect.select("Spam");
      },

      other() {
        ProfileSettingsElements.reportSection.reportSelect.select("Otro");
      },
    };
  }
}
