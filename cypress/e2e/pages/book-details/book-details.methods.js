import { BookDetailsElements } from "./book-details.elements";

export class BookDetailsMethods {
  // Click en el boton de añadir a favoritos
  static addFavoriteClick() {
    BookDetailsElements.buttons.addFavoriteButton.click();
  }

  // Click en el boton de quitar de favoritos
  static removeFavoriteClick() {
    BookDetailsElements.buttons.removeFavoriteButton.click();
  }

  // Click en el boton de comenzar a leer
  static startReadingClick() {
    BookDetailsElements.buttons.startReading.click();
  }

  // Click en el boton de añadir un comentario
  static addCommentClick() {
    BookDetailsElements.buttons.addComment.click();
  }

  // Agregar un comentario
  static insertComment(comment) {
    BookDetailsElements.comentarySection.comentary.type(comment);
  }

  // Dar una reseña de estrellas
  static giveStars() {
    return {
      oneStarReview: () => {
        BookDetailsElements.buttons.reviews.find("svg").eq(0).click();
      },

      twoStarReview: () => {
        BookDetailsElements.buttons.reviews.find("svg").eq(1).click();
      },

      threeStarReview: () => {
        BookDetailsElements.buttons.reviews.find("svg").eq(2).click();
      },

      fourStarReview: () => {
        BookDetailsElements.buttons.reviews.find("svg").eq(3).click();
      },

      fiveStarReview: () => {
        BookDetailsElements.buttons.reviews.find("svg").eq(4).click();
      },
    };
  }

  // Verificaciones
  // Verificamos que la seccion de comentarios este presente
  static verifyComentarySection() {
    BookDetailsElements.comentarySection.comentary.should("be.visible");
  }

  // Verificamos el mensaje que aparece al añadir un libro a favoritos
  static verifyFavoriteAddedMessage() {
    BookDetailsElements.messages.addedFavoriteMessage.should(
      "contain.text",
      "El libro ha sido añadido a tus favoritos"
    );
  }

  // Verificamos el mensaje que aparece al quitar un libro de favoritos
  static verifyFavoriteRemovedMessage() {
    BookDetailsElements.messages.removeFavoriteMessage.should(
      "contain.text",
      "El libro ha sido quitado de tus favoritos"
    );
  }
}
