import { ReadChapterElements } from "./read-chapter.elements";

export class ReadChapterMethods {
  // Click en el boton de siguiente capitulo
  static nextCapituleClick() {
    ReadChapterElements.buttons().nextCapitule.click();
  }

  // Click en el boton de finalizar libro
  static finishBookClick() {
    ReadChapterElements.buttons().finishBook.click();
  }

  // Verificaciones
  // Verificar que el capitulo este vacio
  static verifyEmptyCapitule() {
    ReadChapterElements.messagess().emptyCapitules.should("be.visible");
  }

  // Verificar que el libro se haya terminado
  static verifyFinishBook() {
    ReadChapterElements.messagess().finishBookMessage.should(
      "contain.text",
      "¡Felicidades! Has terminado este libro"
    );
  }
}
