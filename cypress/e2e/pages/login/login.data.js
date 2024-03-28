import { correctUser, incorrectUser } from "../../../fixtures/Login.json";

export class LoginData {
  // Login con credenciales validas
  static get validCredentials() {
    return {
      username: correctUser.correctUsername,
      password: correctUser.correctPassword,
    };
  }

  // Login con credenciales invalidas
  static get invalidCredentials() {
    return {
      username: incorrectUser.incorrectUsername,
      password: incorrectUser.incorrectPassword,
    };
  }
}
