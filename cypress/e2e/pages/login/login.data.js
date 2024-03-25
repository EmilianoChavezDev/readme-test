import { correctUser, incorrectUser } from "../../../fixtures/Login.json";

export class LoginData {
  static get validCredentials() {
    return {
      username: correctUser.correctUsername,
      password: correctUser.correctPassword,
    };
  }

  static get invalidCredentials() {
    return {
      username: incorrectUser.incorrectUsername,
      password: incorrectUser.incorrectPassword,
    };
  }
}
