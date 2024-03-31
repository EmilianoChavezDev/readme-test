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

      get searchButton() {
        return cy
          .get(
            'button[class="bg-transparent p-2 rounded-md _lg:text-black _lg:hover:text-white text-white hover:cursor-pointer hover:font-bold transition-all duration-300 hover:scale-110"]',
            { timeout: 10000 }
          )
          .first();
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

  // Input de busqueda del navbar
  static get searchInput() {
    return cy
      .get('input[placeholder="Buscar Libros por ej.: Nombre, Autor..."]', {
        timeout: 10000,
      })
      .eq(0);
  }

  // Botones del desplegable de Escribe
  static get escribeButtons() {
    return {
      get createBookButton() {
        return cy.get("li.border-b", { timeout: 10000 }).eq(0);
      },

      get myBooksButton() {
        return cy.get("li.transition-all", { timeout: 10000 }).eq(1);
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
