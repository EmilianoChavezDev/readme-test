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

  // Insertar username
  static insertUsername(username) {
    AccountSettingsElements.textBoxes.username.type(username);
  }

  // Insertar la contraseña actual
  static insertPassword(password) {
    AccountSettingsElements.textBoxes.oldPassword.type(password);
  }

  // Insertar la contraseña nueva
  static insertNewPassword(password) {
    AccountSettingsElements.textBoxes.newPassword.type(password);
  }

  // Insertar la confirmacion de la contraseña nueva
  static insertNewPasswordConfirm(password) {
    AccountSettingsElements.textBoxes.newPasswordConfirm.type(password);
  }

  // Metodo para cambiar la contraseña
  static updateUserPassword(newPassword, confirmNewPassword) {
    Logger.subStep("Insertar nueva contraseña");
    this.insertNewPassword(newPassword);

    Logger.subStep("Confirmar nueva contraseña");
    this.insertNewPasswordConfirm(confirmNewPassword);
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
