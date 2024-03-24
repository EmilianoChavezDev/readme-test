import { RegisterElements } from "./register.elements";

export class RegisterMethods {
  static insertUsername(username) {
    RegisterElements.textBoxes.username.type(username);
  }

  static insertPassword(password) {
    RegisterElements.textBoxes.password.type(password);
  }

  static insertConfirmPassword(confirmPassword) {
    RegisterElements.textBoxes.confirmPassword.type(confirmPassword);
  }

  static insertBirthDate(birthDate) {
    RegisterElements.textBoxes.birthDate.type(birthDate);
  }

  static clickRegisterButton() {
    RegisterElements.registerButton.registerButton.click();
  }

  static singUp(username, password, confirmPassword, birthDate) {
    this.insertUsername(username);
    this.insertPassword(password);
    this.insertConfirmPassword(confirmPassword);
    this.insertBirthDate(birthDate);
    this.clickRegisterButton();
  }
}
