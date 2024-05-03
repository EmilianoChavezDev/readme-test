import MyBookRestoreElements from "./restore.elements";


export class MyBookRestoreMethods {
  static openUserMenu() {
    MyBookRestoreElements.actionButtons.openMenu.click();
  }
  // Abrir menu de opciones

  // Click en abrir la pagina de restauracion
  static openTrushPage() {
    MyBookRestoreElements.buttons.trush.click();
  }

  static selectBookRestored() {
    MyBookRestoreElements.actionButtons.selectChapterOption.click();
  }

  static restore() {
    MyBookRestoreElements.actionButtons.restore.click().eq(0);
  }
  static verifyRestoreBook() {
    MyBookRestoreElements.successMessages.restoreBook.should("be.visible");
  }
}
