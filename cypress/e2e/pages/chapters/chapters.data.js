import { writeChapter } from "../../../fixtures/CreateBook.json";

export class ChaptersData {
  static get chapterContent() {
    return {
      title: writeChapter.title,
      content: writeChapter.content,
    };
  }
}
