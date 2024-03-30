export class NavBarElements {
  // Botones de la barra de navegacion
  static get buttons() {
    return {
      get homeButton() {
        return cy.get('img[alt="logo"]', { timeout: 10000 });
      },

      get exploreButton() {
        return cy.contains("p", "Explorar", { timeout: 10000 });
      },

      get myFavoritesButton() {
        return cy.get('a[href="/favorites"]', { timeout: 10000 });
      },

      get writeButton() {
        return cy.contains("p", "Escribe", { timeout: 10000 });
      },

      get accountMenuBotton() {
        return cy
          .get(
            "button._lg\\:flex.items-center.justify-center.hidden.transition-all.duration-200.transform.rotate-0",
            { timeout: 10000, multiple: true }
          )
          .first();
      },
    };
  }

  // Botones del desplegable de Escribe
  static get escribeButtons() {
    return {
      get createBookButton() {
        return cy.get("li.border-b", { timeout: 10000 }).eq(0);
      },

      get myBooksButton() {
        return cy.get("li.border-b", { timeout: 10000 }).eq(1);
      },

      get myDraftsButton() {
        return cy.get("li.transition-all", { timeout: 10000 }).eq(2);
      },
    };
  }

  // Botones del despegable menu de cuenta
  static get accountMenuButtons() {
    return {
      get myAccountButton() {
        return cy.get("li.border-b", { timeout: 10000 });
      },

      get logoutButton() {
        return cy.get("li.transition-all", { timeout: 10000 }).eq(1);
      },
    };
  }
}
