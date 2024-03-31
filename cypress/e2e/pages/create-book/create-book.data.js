import {
  title,
  sinopsis,
  category,
  cover,
} from "../../../fixtures/CreateBook.json";

export class CreateBookData {
  static get bookData() {
    return {
      title: title,
      sinopsis: sinopsis,
      category: category,
      cover: cover,
    };
  }
}
