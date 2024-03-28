import { Logger } from "../support/logger";
import { BookDetailsMethods } from "./pages/book-details/book-details.methods";
import { FavoritesMethods } from "./pages/favorites/favorites.methods";
import { LoginData } from "./pages/login/login.data";
import { LoginMethods } from "./pages/login/login.methods";
import { NavBarMethods } from "./pages/navbar/navbar.methods";

describe("Add Book to favorite", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Visit login page");
    cy.visit("https://test--readme-test.netlify.app/auth/login");

    Logger.stepNumber(2);
    Logger.step("Login with valid credentials");
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    Logger.verification("NavBar button Escribe should be visible");
    NavBarMethods.verifyWriteButton();
  });

  it("Add a book to favorite", () => {
    // Seleccionamos el primer libro de novedades
    Logger.stepNumber(3);
    Logger.step("Select the first book of the new releases");
    cy.get("div.bg-gradient-to-t").eq(0).click();

    // Añadimos el libro a favoritos desde los detalles del libro
    Logger.stepNumber(4);
    Logger.step("Add the book to favorites from the book details");
    BookDetailsMethods.addFavoriteClick();

    // Navegamos a la pagina de Mis Favoritos
    Logger.stepNumber(5);
    Logger.step("Go to My Favorites page");
    NavBarMethods.goToFavoritesClick();

    // Verificamos que el libro se haya añadido a favoritos
    Logger.verification("The book should be visible in favorites");
    FavoritesMethods.verifyBookInFavorites();
  });

  it("Remove a book from favorite", () => {
    // Navergamos a la pagina de Mis Favoritos
    Logger.stepNumber(3);
    Logger.step("Go to My Favorites page");
    NavBarMethods.goToFavoritesClick();

    // Verificamos que el libro este en favoritos
    Logger.verification("The book should be visible in favorites");
    FavoritesMethods.verifyBookInFavorites();

    // Quitamos el libro de favoritos
    Logger.stepNumber(4);
    Logger.step("Remove the book from favorites");
    FavoritesMethods.removeFavoriteFullHeartClick();

    // Verificamos que el boton del corazon vacio este visible (Significa que lo sacamos de favoritos)
    Logger.verification("The empty heart button should be visible");
    FavoritesMethods.verifyEmptyHeartButton();

    // Volvemos la inicio
    Logger.stepNumber(5);
    Logger.step("Go to Home page");
    NavBarMethods.goToHomeClick();

    // Volvemos a ver todos los libros
    Logger.stepNumber(6);
    Logger.step("Go to My Favorites page");
    NavBarMethods.goToFavoritesClick();

    // Verificamos que no haya libros en favoritos
    Logger.verification("The favorites page should be empty");
    FavoritesMethods.verifyEmptyFavoritesMessage();
  });

  it("Add book to favorite and remove from the books details", () => {
    // Seleccionamos el primer libro
    Logger.stepNumber(3);
    Logger.step("Select the first book of new releases");
    cy.get("div.bg-gradient-to-t").eq(0).click();

    // Añadimos el libro a favoritos desde los detalles del libro
    Logger.stepNumber(4);
    Logger.step("Add the book to favorites from the book details");
    BookDetailsMethods.addFavoriteClick();

    // Navegamos a la pagina de Mis Favoritos
    Logger.stepNumber(5);
    Logger.step("Go to My Favorites page");
    NavBarMethods.goToFavoritesClick();

    //Verificamos que el libro se haya añadido a favoritos
    Logger.verification("The book should be visible in favorites");
    FavoritesMethods.verifyBookInFavorites();

    // Volvemos la inicio
    Logger.stepNumber(6);
    Logger.step("Go to Home page");
    NavBarMethods.goToHomeClick();

    // Volvemos a seleccionar el primer libro
    Logger.stepNumber(7);
    Logger.step("Select the first book of new releases");
    cy.get("div.bg-gradient-to-t").eq(0).click();

    // Sacamos de favoritos en la pagina de detalles del libro
    Logger.stepNumber(8);
    Logger.step("Remove the book from favorites from the book details");
    BookDetailsMethods.removeFavoriteClick();

    // Ingresamos a favoritos para verificar que se haya sacado
    Logger.stepNumber(9);
    Logger.step("Go to My Favorites page");
    NavBarMethods.goToFavoritesClick();

    // Verificamos que el libro no este en favoritos
    Logger.verification("The favorites page should be empty");
    FavoritesMethods.verifyEmptyFavoritesMessage();
  });
});
