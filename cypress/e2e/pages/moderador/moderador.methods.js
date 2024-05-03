// En moderador.methods.js
import { ModeradorElements } from "./moderador.elements";

export class ModeradorMethods {
  static selectInputSelect() {
    ModeradorElements.buttons.selectInput.click();
  }
  static selectPendienteSelect() {
    ModeradorElements.buttons.selectPendiente.click();
  }
  static selectFirst() {
    ModeradorElements.clickSelect.selectFirst.click();
  }
  static selectEnRevision() {
    ModeradorElements.actions.changeStateRevision.click();
  }
  static selectInputDelete(text) {
    ModeradorElements.clickSelect.selectInputDelete.type(text);
  }

  static selectDeleteBook() {
    ModeradorElements.actions.deleteBook.click();
  }

  static confirmDelete() {
    ModeradorElements.actions.confirmDelete.click();
  }
}
