import {
  title,
  synopsis,
  category,
  cover,
} from "../../../fixtures/CreateBook.json";

export class CreateBookData {
  static get bookData() {
    return {
      title: title,
      synopsis: synopsis,
      category: category,
      cover: cover,
    };
  }
}
