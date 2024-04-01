import { createBook } from "../../../fixtures/CreateBook.json";

export class CreateBookData {
  static get bookData() {
    return {
      title: createBook.title,
      synopsis: createBook.synopsis,
      category: createBook.category,
      cover: createBook.cover,
    };
  }
}
