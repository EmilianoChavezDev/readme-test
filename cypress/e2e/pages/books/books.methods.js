import { BooksElements } from "./books.elements";

export class BookMethods {
  static insertTitle(title) {
    BooksElements.textBoxes.title.type(title);
  }

  static insertSinopsis(sinopsis) {
    BooksElements.textBoxes.sinopsis.type(sinopsis);
  }

  static insertCategory(category) {
    BooksElements.textBoxes.category.select(category);
  }

  static adult() {
    BooksElements.textBoxes.adult.check();
  }

  static insertCover(cover) {
    BooksElements.textBoxes.cover.attachFile(cover);
  }

  static createBook(title, sinopsis, category, cover) {
    this.insertTitle(title);
    this.insertSinopsis(sinopsis);
    this.insertCategory(category);
    this.adult();
    this.insertCover(cover);
  }

  static coverPreview(cover) {
    this.insertCover(cover);
  }
}
