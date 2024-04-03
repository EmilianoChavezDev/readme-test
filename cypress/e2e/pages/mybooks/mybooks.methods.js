import { MyBooksElements } from "./mybooks.elements";

export class MyBooksMethods {
  // Abrir menu de opciones
  static openMenu() {
    MyBooksElements.buttons.threeDots.click();
  }

  // Click en editar libro
  static editBookClick() {
    MyBooksElements.actionButtons.editButton.click();
  }

  // Click en eliminar libro
  static deleteBookClick() {
    MyBooksElements.actionButtons.deleteButton.click();
  }

  // Click en confirmar eliminar libro
  static confirmDeleteBook() {
    MyBooksElements.actionButtons.confirmDeleteButton.click();
  }

  // Click en seguir escribiendo
  static continueWritingClick() {
    MyBooksElements.buttons.continueWriting.click();
  }

  // Verificaciones
  // Verificamos si se borro el libro
  static verifyBookDeleted() {
    MyBooksElements.successMessages.deleteBook.should("be.visible");
  }
}
