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

  // Cambiamos el nombre de perfil
  static inputName(name) {
    ProfileSettingsElements.textBoxes.nameInput.clear().type(name);
  }

  // Cambiamos la direccion
  static inputDirection(direction) {
    ProfileSettingsElements.textBoxes.directionInput.clear().type(direction);
  }

  // Cambiamos la nacionalidad
  static inputNationality(nationality) {
    ProfileSettingsElements.textBoxes.nationalityInput
      .clear()
      .type(nationality);
  }

  // Cambiamos la descripcion
  static inputDescription(description) {
    ProfileSettingsElements.textBoxes.descriptionInput
      .clear()
      .type(description);
  }

  // Ingresamos la fecha de nacimiento
  static inputBirthDate(birth_date) {
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
}
