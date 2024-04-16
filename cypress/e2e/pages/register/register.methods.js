import { Logger } from "../../../support/logger";
import { RegisterElements } from "./register.elements";

export class RegisterMethods {
  // Inserta el nombre de usuario
  static insertUsername(username) {
    RegisterElements.textBoxes.username.type(username);
  }

  // Insertamos el email
  static insertEmail(email) {
    RegisterElements.textBoxes.email.type(email);
  }

  // Inserta la contraseña
  static insertPassword(password) {
    RegisterElements.textBoxes.password.type(password);
  }

  // Inserta la confirmacion de la contraseña
  static insertConfirmPassword(confirmPassword) {
    RegisterElements.textBoxes.confirmPassword.type(confirmPassword);
  }

  // Inserta la fecha de nacimiento
  static insertBirthDate(birthDate) {
    RegisterElements.textBoxes.birthDate.type(birthDate);
  }

  // Click en el boton de registro
  static clickRegisterButton() {
    RegisterElements.registerButton.registerButton.click();
  }

  // Metodo para registrar un usuario
  static signUp(username, email, password, confirmPassword, birthDate) {
    Logger.subStep("Insertar username");
    this.insertUsername(username);

    Logger.subStep("Insertar email");
    this.insertEmail(email);

    Logger.subStep("Insertar password");
    this.insertPassword(password);

    Logger.subStep("Insertar confirmar password");
    this.insertConfirmPassword(confirmPassword);

    Logger.subStep("Insertar fecha de nacimiento");
    this.insertBirthDate(birthDate);

    Logger.subStep("Click en el boton de registrarse");
    this.clickRegisterButton();
  }

  // Metodo para registrar un usuario con campos vacios
  static signUpEmptyFields(username, password, birthDate) {
    Logger.subStep("Insertar username");
    this.insertUsername(username);

    Logger.subStep("Insertar password");
    this.insertPassword(password);

    Logger.subStep("Insertar fecha de nacimiento");
    this.insertBirthDate(birthDate);

    Logger.subStep("Click en el boton de registrarse");
    this.clickRegisterButton();
  }

  // Verificaciones
  // Verifica que el usuario ya exista
  static verifyUserAlreadyExist() {
    RegisterElements.errorMessages.userAlreadyExist.should("be.visible");
  }

  // Verifica que todos los campos esten vacios
  static verifyAllFieldsAreEmpty() {
    RegisterElements.errorMessages.fillAllFields.should("be.visible");
  }

  // Verifica que la fecha de nacimiento este vacia
  static verifyBirthDateEmpty() {
    RegisterElements.errorMessages.birthDateEmpty
      .focused()
      .should("have.attr", "name", "fecha_nacimiento");
  }

  // Verifica que las contraseñas no coincidan
  static verifyPasswordNotMatch() {
    RegisterElements.errorMessages.passwordNotMatch.should("be.visible");
  }

  // Verifica la longitud de la contraseña
  static verifyPasswordLengthInvalid() {
    RegisterElements.errorMessages.passwordLengthInvalid.within(() => {
      cy.contains("p", "La contraseña debe tener").should("be.visible");
      cy.contains("p", "8 caracteres minimo").should("be.visible");
      cy.contains("p", "debe contener al menos 1 numero").should("be.visible");
    });
  }

  // Verifica que la fecha de nacimiento sea valida
  static verifyBirthDateInvalid() {
    RegisterElements.errorMessages.birthDateInvalid.should("be.visible");
  }
}
