import { Logger } from "../../../support/logger";
import { BooksElements } from "./books.elements";

export class BookMethods {
  // Insertar titulo
  static insertTitle(title) {
    BooksElements.textBoxes.title.type(title);
  }

  // Insertar sinopsis
  static insertSinopsis(sinopsis) {
    BooksElements.textBoxes.sinopsis.type(sinopsis);
  }

  // Insertar categoria
  static insertCategory(category) {
    BooksElements.textBoxes.category.select(category);
  }

  // Marcar como adulto
  static adult() {
    BooksElements.textBoxes.adult.check();
  }

  // Insertar portada
  static insertCover(cover) {
    BooksElements.textBoxes.cover.attachFile(cover);
  }

  // Click en el boton de seguir
  static seguirButtonClick() {
    BooksElements.bookButtons.seguirButton.click();
  }

  // Click en el boton de cancelar
  static cancelButtonClick() {
    BooksElements.bookButtons.cancelButton.click();
  }

  // Metodo para crear un libro
  static createBook(title, sinopsis, category, cover) {
    Logger.subStep("Insert title");
    this.insertTitle(title);

    Logger.subStep("Insert sinopsis");
    this.insertSinopsis(sinopsis);

    Logger.subStep("Insert category");
    this.insertCategory(category);

    Logger.subStep("Check adult");
    this.adult();

    Logger.subStep("Insert cover");
    this.insertCover(cover);

    Logger.subStep("Click create button");
    BooksElements.bookButtons.seguirButton.click();
  }

  // Metodo para insertar una portada
  static coverPreview(cover) {
    Logger.subStep("Insert cover");
    this.insertCover(cover);
  }

  // Verificaciones
  // Verificar titulo vacio
  static verifyEmptyTitleError() {
    BooksElements.emptyFieldsErrors.title.should(
      "contain.text",
      "El título no puede estar vacio."
    );
  }

  // Verificar sinopsis vacio
  static verifyEmptySinopsisError() {
    BooksElements.emptyFieldsErrors.sinopsis.should(
      "contain.text",
      "La descripción no puede estar vacio"
    );
  }

  // Verificar categoria vacio
  static verifyEmptyCategoryError() {
    BooksElements.emptyFieldsErrors.category.should(
      "contain.text",
      "Debes seleccionar una categoría"
    );
  }

  // Verificar boton de crear deshabilitado
  static verifyDisabledCreateButton() {
    BooksElements.bookButtons.createButton.should("be.disabled");
  }

  // Verificar boton de crear habilitado
  static verifyEnabledCreateButton() {
    BooksElements.bookButtons.createButton.should("not.be.disabled");
  }

  // Verificar que la imagen se haya cargado
  static verifyCoverPreview() {
    BooksElements.coverPreview.cover.should("contain.text", "Cambiar portada");
  }
}
