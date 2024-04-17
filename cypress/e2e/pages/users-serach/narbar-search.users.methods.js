import { ProfileSettingsElements } from "../profile-settings/profile-settings.elements";
import { NavBarSearchUsersElements } from "./navbar-search-users.elements";

export class NavBarSearchUsersMethods {
  // Cambiar a lista de usuarios
  static changeToUsersClick() {
    NavBarSearchUsersElements.buttons.changeToUsers.click();
  }

  // Entramos al primer perfil de la lista
  static viewProfile() {
    NavBarSearchUsersElements.userProfile.firstUserProfile.click();
  }

  // Verificamos que estemos en el perfil del usuario
  static verifyProfile(username) {
    ProfileSettingsElements.profileSection.profileUsername.should(
      "include.text",
      username
    );
  }
}
