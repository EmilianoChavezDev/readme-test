import { newBook } from "../../../fixtures/EditBook.json";

export class EditBookData {
  static get bookData() {
    return {
      title: newBook.title,
      synopsis: newBook.synopsis,
      category: newBook.category,
      cover: newBook.cover,
    };
  }
}
