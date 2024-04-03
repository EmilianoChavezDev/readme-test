import { newProfilePicture } from "../../../fixtures/Account.json";

export class AccountSettingsData {
  static get accountData() {
    return {
      profile: newProfilePicture.picture,
    };
  }
}
