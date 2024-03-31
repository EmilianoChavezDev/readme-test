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

  // Verificaciones
  // Verificamos que la seccion de comentarios este presente
  static verifyComentarySection() {
    BookDetailsElements.comentarySection.comentary.should("be.visible");
  }
}
