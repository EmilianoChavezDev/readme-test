import { MyBooksElements } from "./mybooks.elements";

export class MyBooksMethods {
  // Abrir menu de opciones
  static openMenu() {
    MyBooksElements.buttons.threeDots.click();
  }

  // Click en editar libro
  static editBook() {
    MyBooksElements.actionButtons.editButton.click();
  }
}
