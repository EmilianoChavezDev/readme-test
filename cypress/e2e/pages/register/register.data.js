import {
  newUser,
  existingUser,
  additionalInfo,
} from "../../../fixtures/Register.json";

export class RegisterData {
  // Registro con datos validos
  static get validRegisterData() {
    return {
      username: newUser.newUsername,
      password: newUser.newPassword,
      confirmPassword: additionalInfo.confirmPassword,
      birthDate: additionalInfo.birth_date,
    };
  }

  // Registro con datos invalidos
  static get invalidRegisterData() {
    return {
      username: existingUser.existUsername,
      password: existingUser.existPassword,
      confirmPassword: additionalInfo.confirmPassword,
      birthDate: additionalInfo.birth_date,
    };
  }

  // Registro con contraseña que no coincide
  static get passwordNotMatch() {
    return {
      username: existingUser.existUsername,
      password: existingUser.existPassword,
      confirmPassword: additionalInfo.passwordNotMatch,
      birthDate: additionalInfo.birth_date,
    };
  }

  // Registro con contraseña de longitud invalida
  static get invalidPasswordLength() {
    return {
      username: existingUser.existUsername,
      password: additionalInfo.invalidPasswordLength,
      confirmPassword: additionalInfo.invalidPasswordLength,
      birthDate: additionalInfo.birth_date,
    };
  }
}
