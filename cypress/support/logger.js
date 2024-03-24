//Es una clase que se implemento para que se encargue de imprimir en consola los pasos que se estan ejecutando y las verificaciones que se estan realizando.

export class Logger {
  static stepNumber(number) {
    const message = `Step # ${number}`;
    cy.log(`**${message}**`);
  }

  static step(description) {
    const message = `Step - ${description}`;
    cy.log(`**${message}**`);
  }

  static verification(description) {
    const message = `Verification - ${description}`;
    cy.log(`**${message}**`);
  }
}
