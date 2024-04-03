import { Logger } from "../../../../support/logger";
import { BookDetailsMethods } from "../../../pages/book-details/book-details.methods";
import { CommonPageData } from "../../../pages/common-page/common-page.data";
import { FavoritesMethods } from "../../../pages/favorites/favorites.methods";
import { LoginData } from "../../../pages/login/login.data";
import { LoginMethods } from "../../../pages/login/login.methods";
import { NavBarMethods } from "../../../pages/navbar/navbar.methods";

describe("Add Book to favorite", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Navegamos a la pagina de login");
    cy.visit(CommonPageData.appPages.loginUrl);

    Logger.verification("Estamos en la pagina de login");
    cy.url().should("eq", CommonPageData.appPages.loginUrl);

    Logger.stepNumber(2);
    Logger.step("Login con credenciales validas");
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    Logger.verification("NavBar button Escribe should be visible");
    NavBarMethods.verifyWriteButton();
  });

  it("Add and remove book from favorites", () => {
    // Seleccionamos el primer libro de novedades
    Logger.stepNumber(3);
    Logger.step("Seleccionamos el primer libro de novedades");
    cy.get(".grid-cols-1 > div").eq(1).click();

    // Añadimos el libro a favoritos desde los detalles del libro
    Logger.stepNumber(4);
    Logger.step("Agregar el libro a favoritos desde los detalles del libro");
    BookDetailsMethods.addFavoriteClick();

    // Navegamos a la pagina de Mis Favoritos
    Logger.stepNumber(5);
    Logger.step("Vamos a la pagina de Mis Favoritos");
    NavBarMethods.goToFavoritesClick();

    // Verificamos que el libro se haya añadido a favoritos
    Logger.verification("El libro deberia ser visible en favoritos");
    FavoritesMethods.verifyBookInFavorites();

    // Ahora lo quitamos de favoritos
    Logger.stepNumber(6);
    Logger.step("Quitamos el libro de favoritos");
    FavoritesMethods.removeFavoriteFullHeartClick();

    // Verificamos que el boton del corazon vacio este visible (Significa que lo sacamos de favoritos)
    Logger.verification("El boton del corazon vacio deberia ser visible");
    FavoritesMethods.verifyEmptyHeartButton();
  });
});
