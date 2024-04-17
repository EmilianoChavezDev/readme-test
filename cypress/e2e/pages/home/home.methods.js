import { HomeElements } from "./home.elements";

export class HomeMethods {
  // Obtener el libro buscado
  static getBook(book) {
    // Iterar sobre cada elemento del contenedor
    HomeElements.container.bookContainer.each(($el) => {
      // Verificar si el elemento es visible en la pantalla
      if (Cypress.dom.isVisible($el)) {
        // Obtener el nombre del libro dentro del elemento
        const title = $el.find("h5").text();

        if (title.includes(book)) {
          cy.wrap($el).contains("h5", book).click();
        }
      }
    });
  }
}
