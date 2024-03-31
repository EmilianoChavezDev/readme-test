import { CreateBookElements } from "../create-book/create-book.elements";

export class EditBookMethods {
  // Limpiar el campo titulo
  static clearTitle() {
    CreateBookElements.textBoxes.title.clear();
  }

  // Limpiar la sinopsis
  static clearSynopsis() {
    CreateBookElements.textBoxes.synopsis.clear();
  }
}
