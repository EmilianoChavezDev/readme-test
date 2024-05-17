import { Logger } from "../../../support/logger";
import { CreateBookElements } from "./create-book.elements";

export class CreateBookMethods {
  // Insertar titulo
  static insertTitle(title) {
    CreateBookElements.textBoxes.title.type(title);
  }

  // Insertar sinopsis
  static insertSynopsis(synopsis) {
    CreateBookElements.textBoxes.synopsis.type(synopsis);
  }

  // Insertar categoria
  static insertCategory(category) {
    CreateBookElements.textBoxes.category.select(category);
  }

  // Marcar como adulto
  static adult() {
    CreateBookElements.textBoxes.adult.check();
  }

  // Insertar portada
  static insertCover(cover) {
    CreateBookElements.textBoxes.cover.attachFile(cover);
  }

  // Click en el boton de seguir
  static seguirButtonClick() {
    CreateBookElements.bookButtons.seguirButton.click();
  }

  // Click en el boton de cancelar
  static cancelButtonClick() {
    CreateBookElements.bookButtons.cancelButton.click();
  }

  // Metodo para crear un libro
  static createBook(title, synopsis, category, cover) {
    Logger.subStep("Insertar titulo");
    this.insertTitle(title);

    Logger.subStep("Insertar sinopsis");
    this.insertSynopsis(synopsis);

    Logger.subStep("Insertar categoria");
    this.insertCategory(category);

    Logger.subStep("Check adultos");
    this.adult();

    Logger.subStep("Insertar portada");
    this.insertCover(cover);

    Logger.subStep("Click en el boton seguir");
    this.seguirButtonClick();
  }

  // Metodo para insertar una portada
  static coverPreview(cover) {
    Logger.subStep("Insertar portada");
    this.insertCover(cover);
  }

  // Verificaciones
  // Verificar titulo vacio
  static verifyEmptyTitleError() {
    CreateBookElements.emptyFieldsErrors.title.should(
      "contain.text",
      "El titulo no puede estar vacio."
    );
  }

  // Verificar sinopsis vacio
  static verifyEmptySynopsisError() {
    CreateBookElements.emptyFieldsErrors.synopsis.should(
      "contain.text",
      "La descripción no puede estar vacio."
    );
  }

  // Verificar categoria vacio
  static verifyEmptyCategoryError() {
    CreateBookElements.emptyFieldsErrors.category.should(
      "contain.text",
      "Debes seleccionar una categoría"
    );
  }

  // Verificar boton de crear deshabilitado
  static verifyDisabledSeguirButton() {
    this.seguirButtonClick();
    CreateBookElements.bookButtons.seguirButton.should("be.disabled");
  }

  // Verificar boton de crear habilitado
  static verifyEnabledSeguireButton() {
    CreateBookElements.bookButtons.seguirButton.should("be.disabled");
  }

  // Verificar que la imagen se haya cargado
  static verifyCoverPreview() {
    CreateBookElements.coverPreview.cover.should(
      "contain.text",
      "Cambiar portada"
    );
  }
}
