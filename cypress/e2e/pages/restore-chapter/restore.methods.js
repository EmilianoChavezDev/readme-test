import { MyRestoreElements } from "./restore.elements";

export class MyRestoreMethods {
  static openUserMenu() {
    MyRestoreElements.actionButtons.openMenu.click();
  }
  // Abrir menu de opciones

  // Click en abrir la pagina de restauracio
  static openTrushPage() {
    MyRestoreElements.buttons.trush.click();
  }

  static selectChapeterRestored() {
    MyRestoreElements.actionButtons.selectChapterOption.click();
  }

  static restore() {
    MyRestoreElements.actionButtons.restore.click().eq(0);
  }
  static verifyRestoreChapter() {
    MyRestoreElements.successMessages.restoreChapter.should("be.visible");
  }
}
