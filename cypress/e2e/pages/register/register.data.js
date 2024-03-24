import {
  newUsername,
  newPassword,
  existUsername,
  existPassword,
  confirmPassword,
  birth_date,
  passwordNotMatch,
} from "../../../fixtures/Register.json";

export class RegisterData {
  static get validRegisterData() {
    return {
      username: newUsername,
      password: newPassword,
      confirmPassword: confirmPassword,
      birthDate: birth_date,
    };
  }

  static get invalidRegisterData() {
    return {
      username: existUsername,
      password: existPassword,
      confirmPassword: confirmPassword,
      birthDate: birth_date,
    };
  }

  static get passwordNotMatch() {
    return {
      username: newUsername,
      password: newPassword,
      confirmPassword: passwordNotMatch,
      birthDate: birth_date,
    };
  }
}
