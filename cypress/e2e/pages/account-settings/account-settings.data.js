import {
  newProfilePicture,
  newUserPassword,
  newBirthDate,
} from "../../../fixtures/Account.json";

export class AccountSettingsData {
  static get accountData() {
    return {
      profile: newProfilePicture.picture,
      newPassword: newUserPassword.password,
      newBirthDate: newBirthDate.birthDate,
    };
  }
}
