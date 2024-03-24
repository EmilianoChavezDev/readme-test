import { LoginElements } from "./login.elements";

export class LoginMethods {
  static insertUsername(username) {
    LoginElements.textBoxes.username.type(username);
  }

  static insertPassword(password) {
    LoginElements.textBoxes.password.type(password);
  }

  static clickLoginButton() {
    LoginElements.loginButton.loginButton.click();
  }

  static login(username, password) {
    this.insertUsername(username);
    this.insertPassword(password);
    this.clickLoginButton();
  }
}
