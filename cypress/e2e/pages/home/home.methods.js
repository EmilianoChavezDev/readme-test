import { HomeElements } from "./home.elements";

export class HomeMethods {
  // Obtener el libro buscado9
  static getBook() {
    // Iterar sobre cada elemento del contenedor
    HomeElements.container.bookContainer.click();
  }
}
