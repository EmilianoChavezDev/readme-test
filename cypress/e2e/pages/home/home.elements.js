export class HomeElements {
  // Contenedor de libros de la pagina principal
  static get container() {
    return {
      get bookContainer() {
        return cy.get('div.text-xs').eq(0)
      },
    };
  }
}
