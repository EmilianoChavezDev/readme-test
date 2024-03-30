import { correctUser } from "../../../fixtures/Login.json";

export class LoginData {
  // Login con credenciales validas
  static get validCredentials() {
    return {
      username: correctUser.correctUsername,
      password: correctUser.correctPassword,
    };
  }
}
