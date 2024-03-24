import {
  title,
  sinopsis,
  category,
  cover,
} from "../../../fixtures/CreateBook.json";

export class BooksData {
  static get bookData() {
    return {
      title: title,
      sinopsis: sinopsis,
      category: category,
      cover: cover,
    };
  }
}
