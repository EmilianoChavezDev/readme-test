import { Logger } from "../../../support/logger";
import { NavBarElements } from "./navbar.elements";

export class NavBarMethods {
  // Damos click en el input de busqueda
  static searchInputClick() {
    NavBarElements.searchInput.click();
  }

  // Damos click en el boton de busqueda
  static searchButtonClick() {
    NavBarElements.buttons.searchButton.click();
  }

  // Ir a la pagina de inicio
  static goToHomeClick() {
    NavBarElements.buttons.homeButton.click();
  }

  // Desplegar el menu de explorar
  static goToExploreClick() {
    NavBarElements.buttons.exploreButton.click();
  }

  // Ir a la pagina de favoritos
  static goToFavoritesClick() {
    NavBarElements.buttons.myFavoritesButton.click();
  }

  // Ir a la pagina de mi cuenta
  static goToMyAccount() {
    Logger.subStep("Click en el menu de cuenta");
    NavBarElements.buttons.accountMenuBotton.click();

    Logger.subStep("Click en Mi informacion personal");
    NavBarElements.accountMenuButtons.myAccountButton.click();
  }

  // Ir a la pagina de crear un nuevo libro
  static goToWriteBook() {
    Logger.subStep("Click en Escribe");
    NavBarElements.buttons.writeButton.click();

    Logger.subStep("Click en Crear nuevo libro");
    NavBarElements.escribeButtons.createBookButton.click();
  }

  // Ir a la pagina de mis libros
  static goToMyBooks() {
    Logger.subStep("Click en Escribe");
    NavBarElements.buttons.writeButton.click();

    Logger.subStep("Click en Mis libros");
    NavBarElements.escribeButtons.myBooksButton.click();
  }

  // Hacer logout
  static goToLogout() {
    Logger.subStep("Click en el menu de cuenta");
    NavBarElements.buttons.accountMenuBotton.click();

    Logger.subStep("Click en Cerrar sesion");
    NavBarElements.accountMenuButtons.logoutButton.click();
  }

  // Buscar un libro
  static searchBook(Book) {
    NavBarMethods.searchInputClick();
    NavBarElements.searchInput.type(Book);
    NavBarElements.buttons.searchButton.click();
  }

  // Limpiar el input de busqueda
  static clearInput() {
    NavBarElements.searchInput.clear();
  }

  // Verificaciones
  // Verificar que el boton de Escribe del navbar este visible
  static verifyWriteButton() {
    NavBarElements.buttons.writeButton.should("be.visible");
  }
}
