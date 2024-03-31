import { FavoritesElements } from "./favorites.elements";

export class FavoritesMethods {
  // Click en el corazon vacio para añadir el libro a favoritos
  static addFavoriteEmptyHeartClick() {
    FavoritesElements.buttons.emptyHeartButton.click();
  }

  // Click en el corazon lleno para quitar el libro de favoritos
  static removeFavoriteFullHeartClick() {
    FavoritesElements.buttons.fullHeartButton.click();
  }

  // Verificaciones
  // Verificamos que el libro este en favoritos
  static verifyBookInFavorites() {
    FavoritesElements.container.bookContainer.eq(1).should("be.visible");
  }

  // Verificamos si el corazon vacio esta visible
  static verifyEmptyHeartButton() {
    FavoritesElements.buttons.emptyHeartButton.should("be.visible");
  }

  // Verificamos si el mensaje de favoritos vacios esta visible
  static verifyEmptyFavoritesMessage() {
    FavoritesElements.emptyFavoritesMessage.should("be.visible");
  }
}
