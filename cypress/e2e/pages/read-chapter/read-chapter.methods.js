import { ReadChapterElements } from "./read-chapter.elements";

export class ReadChapterMethods {
  // Verificaciones
  // Verificar que el capitulo este vacio
  static verifyEmptyCapitule() {
    ReadChapterElements.messagess().emptyCapitules.should("be.visible");
  }
}
