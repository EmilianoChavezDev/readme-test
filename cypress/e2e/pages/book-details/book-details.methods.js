import { Logger } from "../../../support/logger";
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

  // Click en los tres puntos
  static threeDotsClick() {
    BookDetailsElements.comentarySection.threeDots.click();
  }

  // Click en eliminar comentario
  static deleteCommentClick() {
    BookDetailsElements.comentarySection.deleteButton.click();
  }

  // Click en aceptar eliminar
  static deleteCommentAcceptClick() {
    BookDetailsElements.comentarySection.confirmDeleteButton.click();
  }

  // Agregar un comentario
  static insertComment(comment) {
    BookDetailsElements.comentarySection.comentary.type(comment);
  }

  static editCommentClick() {
    BookDetailsElements.comentarySection.acceptButton.click();
  }

  // Editar un comentario
  static editComment(comment) {
    Logger.subStep("Click en el boton de editar");
    BookDetailsElements.comentarySection.editButton.click();

    Logger.subStep("Limpiar el comentario anterior");
    BookDetailsElements.comentarySection.editComentaryInput
      .clear()
      .type(comment);
  }

  // Dar una reseña de estrellas
  static giveStars() {
    return {
      oneStarReview: () => {
        BookDetailsElements.buttons.reviews.eq(0).click();
      },

      twoStarReview: () => {
        BookDetailsElements.buttons.reviews.eq(1).click();
      },

      threeStarReview: () => {
        BookDetailsElements.buttons.reviews.eq(2).click();
      },

      fourStarReview: () => {
        BookDetailsElements.buttons.reviews.eq(3).click();
      },

      fiveStarReview: () => {
        BookDetailsElements.buttons.reviews.eq(4).click();
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

  // Verificamos si el comentario se elimino
  static verifyComentaryRemoveMessage() {
    BookDetailsElements.messages.removeCommentaryMessage.should(
      "contain.text",
      "Comentario eliminado correctamente"
    );
  }
}
