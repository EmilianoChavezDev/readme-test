export class NavBarElements {
  static get buttons() {
    return {
      get homeButton() {
        return cy.get('img[alt="logo"]');
      },
      get exploreButton() {
        return cy.contains("p", "Explorar");
      },
      get myFavoritesButton() {
        return cy.get('a[href="/favorites"]');
      },
      get writeButton() {
        return cy.contains("p", "Escribe");
      },
      get createBookButton() {
        return cy.get("li.border-b").eq(0);
      },
    };
  }
}
