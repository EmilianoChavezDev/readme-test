import { ChaptersElements } from "./chapters.elements";

export class ChaptersMethods {
  // Insertamos el titulo
  static insertTitle(title) {
    ChaptersElements.textBoxes.title.type(title);
  }

  // Insertamos la descripcion
  static insertContent(content) {
    ChaptersElements.textBoxes.content.type(content);
  }

  // Click en el boton publicar
  static publishButtonClick() {
    ChaptersElements.buttons.publish.click();
  }

  // Verificaciones
  // Verificamos que el capitulo ha sido publicado
  static verifyChapterPublished() {
    ChaptersElements.successMessages.publishedChapter.should("be.visible");
  }
}
