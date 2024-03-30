import { Logger } from "../../../support/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods {
  // Inserta el nombre de usuario
  static insertUsername(username) {
    LoginElements.textBoxes.username.type(username);
  }

  // Inserta la contraseña
  static insertPassword(password) {
    LoginElements.textBoxes.password.type(password);
  }

  // Click en el boton de login
  static clickLoginButton() {
    LoginElements.loginButton.loginButton.click();
  }

  // Metodo para hacer login
  static login(username, password) {
    Logger.subStep("Insertar username");
    this.insertUsername(username);
    Logger.subStep("Insertar password");
    this.insertPassword(password);
    Logger.subStep("Click en el boton de login");
    this.clickLoginButton();
  }

  // Verification
  // Verifica si la contraseña o el usuario no son validos
  static verifyUserOrPasswordNotValid() {
    LoginElements.messages.userOrPasswordNotValid.should("be.visible");
  }

  // Verifica si el campo de usuario esta vacio
  static verifyUsernameEmptyField() {
    LoginElements.messages.usernameEmpty.should("be.visible");
  }

  // Verifica si el campo de contraseña esta vacio
  static verifyPasswordEmptyField() {
    LoginElements.messages.passwordEmpty.should("be.visible");
  }
}
