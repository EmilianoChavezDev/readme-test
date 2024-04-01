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

  // Click en eliminar libro
  static deleteBook() {
    MyBooksElements.actionButtons.deleteButton.click();
  }

  // Click en confirmar eliminar libro
  static confirmDeleteBook() {
    MyBooksElements.actionButtons.confirmDeleteButton.click();
  }

  // Verificaciones
  // Verificamos si se borro el libro
  static verifyBookDeleted() {
    MyBooksElements.successMessages.deleteBook.should("be.visible");
  }
}
