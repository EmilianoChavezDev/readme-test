export class MyDeleteChaptersElements  {
    // Botones de mis libros
    static get buttons() {
      return {
        get continueWriting() {
          return cy.get("div.mybooks_write_content__lGcID a").eq(0);
        },
      };
    }
  
    // Botones de accion
    static get actionButtons() {
      return {
        // edito los capitulos del libro
        get editButton() {
          return cy.get(".mybooks_btn_edition_option__BZsll");
        },
  
        get openChaptersMenu() {
          return cy.get('svg[class="text-2xl hover:cursor-pointer"]');
        },
        get trushOneChapter() {
          return cy.get('div[role="button"] button').eq(0);
        },
      };
    }
  
    // Mensajes de exito
    static get successMessages() {
      return {
        get deleteBook() {
          return cy
            .get(".go3958317564")
            .should(
              "contain",
              "Tu capitulo se movio a la papelera de reciclaje."
            );
        },
      };
    }
  }
  