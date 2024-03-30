import {
  newProfilePicture,
  newUserPassword,
} from "../../../fixtures/Account.json";

export class AccountData {
  static get accountData() {
    return {
      profile: newProfilePicture.picture,
      newPassword: newUserPassword.password,
    };
  }
}
