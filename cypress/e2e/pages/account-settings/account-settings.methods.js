import { Logger } from "../../../support/logger";
import {
  AccountElements,
  AccountSettingsElements,
} from "./account-settings.elements";

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
  static updateUserPassword(password, newPassword) {
    Logger.subStep("Insertar contraseña actual");
    this.inputPassword(password);

    Logger.subStep("Insertar nueva contraseña");
    this.inputNewPassword(newPassword);

    Logger.subStep("Confirmar nueva contraseña");
    this.inputNewPasswordConfirm(newPassword);

    Logger.subStep("Guardar cambios");
    this.saveChangesClick();
  }

  // Verificaciones
  // Verificar que se muestre el mensaje de error de contraseña incorrecta
  static verifyIncorrectPassword() {
    AccountSettingsElements.errorMessages.incorrectPassword
      .invoke("text")
      .should("eq", "Contraseña incorrecta");
  }

  // Verificar que se muestre el mensaje de error de contraseña nueva
  static verifyProfileChanged() {
    AccountSettingsElements.successMessages.profileUpdate
      .invoke("text")
      .should("eq", "Foto de perfil actualizado");
  }
}