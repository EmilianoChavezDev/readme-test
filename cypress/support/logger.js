//Es una clase que se implemento para que se encargue de imprimir en consola los pasos que se estan ejecutando y las verificaciones que se estan realizando.
import * as allure from "allure-cypress";

export class Logger {
  static stepNumber(number) {
    const message = `Step # ${number}`;
    cy.log(`**${message}**`);
    allure.step(message, () => {});
  }

  static step(description) {
    const message = `Step - ${description}`;
    cy.log(`**${message}**`);
    allure.step(message, () => {});
  }

  static verification(description) {
    const message = `Verification - ${description}`;
    cy.log(`**${message}**`);
    allure.step(message, () => {});
  }

  static subStep(description) {
    const message = `SubStep - ${description}`;
    cy.log(`**${message}**`);
    allure.step(message, () => {});
  }

  static subVerification(description) {
    const message = `SubVerification - ${description}`;
    cy.log(`**${message}**`);
    allure.step(message, () => {});
  }
}
