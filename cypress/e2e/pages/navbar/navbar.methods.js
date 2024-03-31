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
  static goToExplore() {
    NavBarElements.buttons.exploreButton.click();
  }

  // Ir a la pagina de favoritos
  static goToFavoritesClick() {
    NavBarElements.buttons.myFavoritesButton.click();
  }

  // Ir a la pagina de mi cuenta
  static goToMyAccount() {
    Logger.step("Click en el menu de cuenta");
    NavBarElements.buttons.accountMenuBotton.click();

    Logger.step("Click en Mi informacion personal");
    NavBarElements.accountMenuButtons.myAccountButton.click();
  }

  // Hacer logout
  static goToLogout() {
    Logger.step("Click en el menu de cuenta");
    NavBarElements.buttons.accountMenuBotton.click();

    Logger.step("Click en Cerrar sesion");
    NavBarElements.accountMenuButtons.logoutButton.click();
  }

  // Ir a la pagina de crear un nuevo libro
  static goToCreateBook() {
    Logger.step("Click en Escribe");
    NavBarElements.buttons.writeButton.click();

    Logger.step("Click en Crear nuevo libro");
    NavBarElements.escribeButtons.createBookButton.click();
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
