export class ReadChapterElements {
  static messagess() {
    return {
      get emptyCapitules() {
        return cy.contains(
          "p",
          " ¡Vaya! Parece que este libro aún no tiene ningún capítulo."
        );
      },
    };
  }
}
