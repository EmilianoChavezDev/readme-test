import { writeChapter } from "../../../fixtures/Chapters.json";

export class ChaptersData {
  static get chapterContent() {
    return {
      title: writeChapter.title,
      content: writeChapter.content,
    };
  }
}
