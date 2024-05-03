import { MyDeleteChaptersElements } from "./delete.elements";

export class MyDeleteChaptersElements {
  static continueWriting() {
    MyDeleteChaptersElements.buttons.continueWriting.click().eq(0);
  }
  // Abrir menu de opciones
  static openMenu() {
    MyDeleteChaptersElements.actionButtons.openChaptersMenu.click();
  }

  // Click en editar libro
  static deleteChapterClick() {
    MyDeleteChaptersElements.actionButtons.trushOneChapter.click().eq(0);
  }

  // Verificamos si se borro el libro
  static verifyChapterDeleted() {
    MyBooksElements.successMessages.deleteBook.should("be.visible");
  }
}
