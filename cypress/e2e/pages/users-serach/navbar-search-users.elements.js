export class NavBarSearchUsersElements {
  // Cambiar a lista de usuarios
  static get buttons() {
    return {
      get changeToUsers() {
        return cy.get('ul[role="tablist"] li').contains("Usuarios");
      },
    };
  }

  // Entramos al primer perfil de la lista
  static get userProfile() {
    return {
      get firstUserProfile() {
        return cy.get("div.bg-clip-border div").eq(0);
      },
    };
  }
}
