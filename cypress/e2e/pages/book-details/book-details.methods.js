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

  // Dar una reseña de estrellas
  static giveStars() {
    return {
      oneStarReview: () => {
        NavBarSearchElements.buttons.reviews.find("svg").eq(0).click();
      },

      twoStarReview: () => {
        NavBarSearchElements.buttons.reviews.find("svg").eq(1).click();
      },

      threeStarReview: () => {
        NavBarSearchElements.buttons.reviews.find("svg").eq(2).click();
      },

      fourStarReview: () => {
        NavBarSearchElements.buttons.reviews.find("svg").eq(3).click();
      },

      fiveStarReview: () => {
        NavBarSearchElements.buttons.reviews.find("svg").eq(4).click();
      },
    };
  }

  // Verificaciones
  // Verificamos que la seccion de comentarios este presente
  static verifyComentarySection() {
    BookDetailsElements.comentarySection.comentary.should("be.visible");
  }
}
