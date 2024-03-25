import { FavoritesElements } from "./pages/favorties/favorites.elements";
import { LoginData } from "./pages/login/login.data";
import { LoginMethods } from "./pages/login/login.methods";
import { NavBarElements } from "./pages/navbar/navbar.elements";


// TODO: Check tests
describe("Add Book to favorite", () => {
  beforeEach(() => {
    cy.visit("https://test--readme-test.netlify.app/auth/login");

    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    cy.wait(2000);

    cy.get("nav.relative div").eq(0).should("be.visible");
  });

  const addFavortie = "https://readme-backend.fly.dev/favoritos";

  it("Add a book to favorite", () => {
    // Seleccionamos el primer libro
    cy.get("div.bg-gradient-to-t").eq(0).click();
    cy.wait(2000);

    // Añadimos el libro a favoritos
    FavoritesElements.buttons.addFavoriteButton.click();

    // Navegamos a la pagina de favoritos
    NavBarElements.buttons.myFavoritesButton.click();

    //Verificamos que el libro se haya añadido a favoritos
    cy.get("div.favorites_contenedor_datos_cuadro__MqGnE img", {
      timeout: 10000,
    })
      .eq(1)
      .should("be.visible");

    cy.wait(2000);
  });

  it("Remove a book from favorite", () => {
    cy.get("div.bg-gradient-to-t").eq(0).click();

    // Añadimos el libro a favoritos desde la pagina del libro
    FavoritesElements.buttons.addFavoriteButton.click();

    // Navergamos a la pagina de favoritos
    NavBarElements.buttons.myFavoritesButton.click();

    cy.wait(2000);

    // Verificamos que el libro este en favoritos
    cy.get("div.favorites_contenedor_datos_cuadro__MqGnE img")
      .eq(1)
      .should("be.visible");

    // Quitamos el libro de favoritos
    FavoritesElements.buttons.fullHeartButton.click();

    // Verificamos que el boton del corazon vacio este visible (Significa que lo sacamos de favoritos)
    FavoritesElements.buttons.emptyHeartButton.should("be.visible");

    cy.wait(2000);

    // Volvemos a ver todos los libros
    NavBarElements.buttons.myFavoritesButton.click();

    cy.wait(2000);
  });

  it("Add a book to favorite and remove from the books datails", () => {
    // Seleccionamos el primer libro
    cy.get("div.bg-gradient-to-t").eq(0).click();
    cy.wait(2000);

    // Añadimos el libro a favoritos
    FavoritesElements.buttons.addFavoriteButton.click();

    // Navegamos a la pagina de favoritos
    NavBarElements.buttons.myFavoritesButton.click();

    //Verificamos que el libro se haya añadido a favoritos
    cy.get("div.favorites_contenedor_datos_cuadro__MqGnE img", {
      timeout: 10000,
    })
      .eq(1)
      .should("be.visible");

    cy.wait(2000);

    // Volvemos la inicio
    NavBarElements.buttons.homeButton.click();

    // Volvemos a ingresar a la pagina del libro
    cy.get("div.bg-gradient-to-t").eq(0).click();

    // Sacamos de favoritos en la pagina del libro
    FavoritesElements.buttons.removeFavoriteButton.click();

    // Ingresamos a favoritos para verificar que se haya sacado
    NavBarElements.buttons.myFavoritesButton.click();

    // Verificamos que el libro no este en favoritos
    cy.contains(
      "p",
      "Parece que tu lista de favoritos está vacía por ahora. "
    ).should("be.visible");
  });
});
