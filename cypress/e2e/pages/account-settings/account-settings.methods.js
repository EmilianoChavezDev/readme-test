import { Logger } from "../../../support/logger";
import { AccountSettingsElements } from "./account-settings.elements";

export class AccountSettingsMethods {
  // Ir a la pagina de mi cuenta
  static myAccountClick() {
    AccountSettingsElements.buttons.myInformation.click();
  }

  // Ir a la pagina de mis estadisticas
  static myStatisticsClick() {
    AccountSettingsElements.buttons.myStatistics.click();
  }

  // Abrir dropdown de cambiar contraseña
  static openDropDownClick() {
    AccountSettingsElements.buttons.openDropDown.click();
  }

  // Boton de guardar cambios
  static saveChangesClick() {
    AccountSettingsElements.buttons.saveChanges.click();
  }

  // Boton de cancelar cambios
  static cancelChangesClick() {
    AccountSettingsElements.buttons.cancelChanges.click();
  }

  // Boton de eliminar foto de perfil
  static removeProfilePictureClick() {
    AccountSettingsElements.profileButtons.removeProfile.click();
  }

  static inputBirthDate(birth_date) {
    AccountSettingsElements.textBoxes.dateBirth.type(birth_date);
  }

  // Insertar la contraseña actual
  static inputPassword(password) {
    AccountSettingsElements.textBoxes.oldPassword.type(password);
  }

  // Insertar la contraseña nueva
  static inputNewPassword(password) {
    AccountSettingsElements.textBoxes.newPassword.type(password);
  }

  // Insertar la confirmacion de la contraseña nueva
  static inputNewPasswordConfirm(password) {
    AccountSettingsElements.textBoxes.newPasswordConfirm.type(password);
  }

  // Abrir el input y cargar una foto de perfil
  static changeUserProfile(picture) {
    AccountSettingsElements.profileButtons.changeProfile
      .click({ force: true })
      .attachFile(picture);
  }

  // Metodo para cambiar la contraseña
  static updateUserPassword(newPassword, confirmNewPassword) {
    Logger.subStep("Insertar nueva contraseña");
    this.inputNewPassword(newPassword);

    Logger.subStep("Confirmar nueva contraseña");
    this.inputNewPasswordConfirm(confirmNewPassword);
  }

  // Metodo para cambiar la fecha de nacimiento
  static changeBirthDate(birth_date, password) {
    Logger.subStep("Insertamos la nueva fecha de nacimiento");
    this.inputBirthDate(birth_date);

    Logger.subStep("Insertamos la contraseña");
    this.inputPassword(password);
  }

  // Verificaciones
  // Verificar que se muestre el mensaje de error de contraseña incorrecta
  static verifyIncorrectPassword() {
    AccountSettingsElements.errorMessages.incorrectPassword
      .invoke("text")
      .should("eq", "Contraseña incorrecta");
  }

  // Verificamos que la contraseña actual es incorrecta
  static verifyActualPassword() {
    AccountSettingsElements.errorMessages.incorrectPassword
      .invoke("text")
      .should("eq", "Contraseña actual incorrecta");
  }

  // Verificamos que se cambiaron los datos correctamente
  static verifyDataUpdated() {
    AccountSettingsElements.successMessages.dataUpdated
      .invoke("text")
      .should("eq", "Datos actualizado con exito");
  }

  // Verificar que se muestre el mensaje de error de contraseña no coinciden
  static verifyPasswordsDontMatch() {
    AccountSettingsElements.errorMessages.passwordNotMatch
      .invoke("text")
      .should("eq", "Las contraseñas no coinciden");
  }
}
