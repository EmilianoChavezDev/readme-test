import { Logger } from "../../../support/logger";
import { CreateBookElements } from "../create-book/create-book.elements";
import { CreateBookMethods } from "../create-book/create-book.methods";
import { EditBookElements } from "./edit-book.elements";

export class EditBookMethods {
  // Limpiar el campo titulo
  static clearTitle() {
    CreateBookElements.textBoxes.title.clear();
  }

  // Limpiar la sinopsis
  static clearSynopsis() {
    CreateBookElements.textBoxes.synopsis.clear();
  }

  // Damos click en el boton de actualizar
  static updateBookClick() {
    EditBookElements.buttons.updateButton.click();
  }

  static removeCover() {
    CreateBookElements.textBoxes.removeCover.click();
  }

  // Cargamos la portadad
  static insertCover(cover) {
    CreateBookMethods.insertCover(cover);
  }

  // Actualizamos la informacion del libro
  static editBook(title, synopsis, category, cover) {
    Logger.subStep("Insertamos el nuevo titulo");
    CreateBookMethods.insertTitle(title);

    Logger.subStep("Insertamos la nueva sinopsis");
    CreateBookMethods.insertSynopsis(synopsis);

    Logger.subStep("Insertamos la nueva categoria");
    CreateBookMethods.insertCategory(category);

    Logger.subStep("Quitamos la portada actual");
    this.removeCover();

    Logger.subStep("Insertamos la nueva portada");
    CreateBookMethods.insertCover(cover);

    Logger.subStep("Damos click en actualizar");
    this.updateBookClick();
  }
}
