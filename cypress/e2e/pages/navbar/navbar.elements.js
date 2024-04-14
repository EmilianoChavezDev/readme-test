export class NavBarElements {
  // Botones de la barra de navegacion
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

      get searchButton() {
        return cy
          .get(
            'button[class="bg-transparent p-2 rounded-md _lg:text-black _lg:hover:text-white text-white hover:cursor-pointer hover:font-bold transition-all duration-300 hover:scale-110"]'
          )
          .first();
      },

      get accountMenuBotton() {
        return cy
          .get(
            "button._lg\\:flex.items-center.justify-center.hidden.transition-all.duration-200.transform.rotate-0",
            { multiple: true }
          )
          .first();
      },
    };
  }

  // Input de busqueda del navbar
  static get searchInput() {
    return cy
      .get('input[placeholder="Buscar Libros por ej.: Nombre, Autor..."]')
      .eq(0);
  }

  // Botones del desplegable de Escribe
  static get escribeButtons() {
    return {
      get createBookButton() {
        return cy.get("li.border-b").eq(0);
      },

      get myBooksButton() {
        return cy.get("li.transition-all").eq(1);
      },
    };
  }

  // Botones del despegable menu de cuenta
  static get accountMenuButtons() {
    return {
      get myAccountButton() {
        return cy.get("li.border-b").eq(1);
      },

      get logoutButton() {
        return cy.get("li.transition-all").eq(2);
      },
    };
  }
}
