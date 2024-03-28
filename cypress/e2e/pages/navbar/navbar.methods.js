import { Logger } from "../../../support/logger";
import { NavBarElements } from "./navbar.elements";

export class NavBarMethods {
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

  // Desplegar el menu de Escribe
  static writeClick() {
    NavBarElements.buttons.writeButton.click();
  }

  // Dentro del menu de Escribe, click en Crear nuevo libro
  static createNewBookClick() {
    NavBarElements.escribeButtons.createBookButton.click();
  }

  // Metodo para crear un libro
  static createBook() {
    Logger.subStep(1);
    Logger.step("Click on Write button");
    this.writeClick();

    Logger.subStep(2);
    Logger.step("Click on Create new book button");
    this.createNewBookClick();
  }

  // Verificaciones
  // Verificar que el boton de Escribe del navbar este visible
  static verifyWriteButton() {
    NavBarElements.buttons.writeButton.should("be.visible");
  }
}
