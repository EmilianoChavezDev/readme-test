import { writeChapter } from "../../../fixtures/Chapters.json";

export class ChaptersData {
  static get chapterContent() {
    return {
      title: writeChapter.title,
      content: writeChapter.content,
      title2: writeChapter.title2,
      content2: writeChapter.content2,
    };
  }
}
