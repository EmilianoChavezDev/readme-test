import { RegisterData } from "./pages/register/register.data";
import { RegisterElements } from "./pages/register/register.elements";
import { RegisterMethods } from "./pages/register/register.methods";

describe("Correct Register", () => {
  beforeEach(() => {
    cy.visit("https://test--readme-test.netlify.app/auth/registrarse");
  });

  it("Correct Register", () => {
    RegisterMethods.singUp(
      RegisterData.validRegisterData.username,
      RegisterData.validRegisterData.password,
      RegisterData.validRegisterData.confirmPassword,
      RegisterData.validRegisterData.birthDate
    );

    cy.get("nav.relative div").eq(0).should("be.visible");
  });

  it("User Already Exist", () => {
    RegisterMethods.singUp(
      RegisterData.invalidRegisterData.username,
      RegisterData.invalidRegisterData.password,
      RegisterData.invalidRegisterData.confirmPassword,
      RegisterData.invalidRegisterData.birthDate
    );

    cy.get("p", { timeout: 10000 }).contains("Nombre de usuario en uso");
  });

  it("Password Not Match", () => {
    RegisterMethods.singUp(
      RegisterData.validRegisterData.username,
      RegisterData.validRegisterData.password,
      RegisterData.passwordNotMatch.confirmPassword,
      RegisterData.validRegisterData.birthDate
    );

    cy.get("p", { timeout: 10000 }).contains("Las contraseñas no coinciden");
  });

  it("Empty Fields", () => {
    RegisterMethods.clickRegisterButton();

    RegisterElements.textBoxes.birthDate
      .focused()
      .should("have.attr", "name", "fecha_nacimiento");
  });
});
