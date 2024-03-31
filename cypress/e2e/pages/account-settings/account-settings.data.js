import {
  newProfilePicture,
  newUserPassword,
} from "../../../fixtures/Account.json";

export class AccountSettingsData {
  static get accountData() {
    return {
      profile: newProfilePicture.picture,
      newPassword: newUserPassword.password,
    };
  }
}
