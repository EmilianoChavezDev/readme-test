import {
  newUser,
  existingUser,
  additionalInfo,
} from "../../../fixtures/Register.json";

export class RegisterData {
  static get validRegisterData() {
    return {
      username: newUser.newUsername,
      password: newUser.newPassword,
      confirmPassword: additionalInfo.confirmPassword,
      birthDate: additionalInfo.birth_date,
    };
  }

  static get invalidRegisterData() {
    return {
      username: existingUser.existUsername,
      password: existingUser.existPassword,
      confirmPassword: additionalInfo.confirmPassword,
      birthDate: additionalInfo.birth_date,
    };
  }

  static get passwordNotMatch() {
    return {
      username: existingUser.existUsername,
      password: existingUser.existPassword,
      confirmPassword: additionalInfo.passwordNotMatch,
      birthDate: additionalInfo.birth_date,
    };
  }
}
