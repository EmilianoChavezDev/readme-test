export class ReadChapterElements {
  static buttons() {
    return {
      get nextCapitule() {
        return cy.get("g#Circle_Chev_Right");
      },

      get finishBook() {
        return cy.get(
          "button.p-2.rounded-full.hover\\:scale-110.transform.transition-all.duration-200"
        );
      },
    };
  }

  static messagess() {
    return {
      get emptyCapitules() {
        return cy.contains(
          "p",
          " ¡Vaya! Parece que este libro aún no tiene ningún capítulo."
        );
      },

      get finishBookMessage() {
        return cy.contains("¡Felicidades! Has terminado este libro");
      },
    };
  }
}
