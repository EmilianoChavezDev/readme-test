import {
  correctUsername,
  correctPassword,
  incorrectUsername,
  incorrectPassword,
} from "../../../fixtures/Login.json";

export class LoginData {
  static get validCredentials() {
    return {
      username: correctUsername,
      password: correctPassword,
    };
  }

  static get invalidCredentials() {
    return {
      username: incorrectUsername,
      password: incorrectPassword,
    };
  }
}
