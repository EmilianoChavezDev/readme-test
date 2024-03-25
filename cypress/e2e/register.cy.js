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

    cy.request({
      method: "POST",
      url: "https://readme-backend.fly.dev/register",
      body: {
        username: RegisterData.validRegisterData.username,
        password: RegisterData.validRegisterData.password,
        confirm_password: RegisterData.validRegisterData.confirmPassword,
        fecha_nacimiento: RegisterData.validRegisterData.birthDate,
        role: "usuario",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(
        RegisterData.validRegisterData.username
      );
      expect(response.body.token).to.exist;
    });

    cy.get("nav.relative div").eq(0).should("be.visible");
  });

  it("User Already Exist", () => {
    RegisterMethods.singUp(
      RegisterData.invalidRegisterData.username,
      RegisterData.invalidRegisterData.password,
      RegisterData.invalidRegisterData.confirmPassword,
      RegisterData.invalidRegisterData.birthDate
    );

    cy.request({
      method: "POST",
      url: "https://readme-backend.fly.dev/register",
      body: {
        username: RegisterData.validRegisterData.username,
        password: RegisterData.validRegisterData.password,
        confirm_password: RegisterData.validRegisterData.confirmPassword,
        fecha_nacimiento: RegisterData.validRegisterData.birthDate,
        role: "usuario",
      },
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(422);
      expect(response.body.error[0]).to.eq(
        "Username El nombre de usuario ya está en uso"
      );
    });

    cy.wait(2000);

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

  it("Password length invalid", () => {
    RegisterMethods.singUp(
      RegisterData.validRegisterData.username,
      RegisterData.invalidPasswordLength.password,
      RegisterData.invalidPasswordLength.password,
      RegisterData.validRegisterData.birthDate
    );

    cy.get("div.text-white").within(() => {
      cy.contains("p", "La contraseña debe tener").should("be.visible");
      cy.contains("p", "8 caracteres minimo").should("be.visible");
      cy.contains("p", "debe contener al menos 1 numero").should("be.visible");
    });
  });
});
