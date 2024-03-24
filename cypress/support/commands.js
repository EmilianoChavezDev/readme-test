// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... });
import "cypress-file-upload";
import { Logger } from "./logger";

Cypress.Commands.add("login", (username, password) => {
  Logger.stepNumber(1);
  Logger.step("Go to login page");
  Logger.verification("The user is on the login page");
  cy.visit("https://test--readme-test.netlify.app/auth/login");

  Logger.stepNumber(2);
  Logger.step("Login with correct credentials");
  Logger.verification("The user is entering the correct credentials");
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);

  Logger.stepNumber(3);
  Logger.step("Click login button");
  Logger.verification("The user is clicking the login button");
  cy.get("#login-btn", { timeout: 10000 }).click();

  Logger.verification("The Logout button is visible");
  cy.get('img[alt="logo"]', { timeout: 10000 }).should("exist");
});
