import { Logger } from "../support/logger";
import { NavBarMethods } from "./pages/navbar/navbar.methods";
import { RegisterData } from "./pages/register/register.data";
import { RegisterMethods } from "./pages/register/register.methods";

describe("Correct Register", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Navigate to register page");
    cy.visit("https://test--readme-test.netlify.app/auth/registrarse");
  });

  it("Correct Register", () => {
    Logger.stepNumber(2);
    Logger.step("Register with valid data");
    RegisterMethods.singUp(
      RegisterData.validRegisterData.username,
      RegisterData.validRegisterData.password,
      RegisterData.validRegisterData.confirmPassword,
      RegisterData.validRegisterData.birthDate
    );

    Logger.verification("NavBar button Escribir should be visible");
    NavBarMethods.verifyWriteButton();
  });

  it("User Already Exist", () => {
    Logger.stepNumber(2);
    Logger.step("Register with same usern");
    RegisterMethods.singUp(
      RegisterData.invalidRegisterData.username,
      RegisterData.invalidRegisterData.password,
      RegisterData.invalidRegisterData.confirmPassword,
      RegisterData.invalidRegisterData.birthDate
    );

    Logger.verification("The user is entering a username that already exists");
    RegisterMethods.verifyUserAlreadyExist();
  });

  it("Password Not Match", () => {
    Logger.stepNumber(2);
    Logger.step("Register with password not match");
    RegisterMethods.singUp(
      RegisterData.validRegisterData.username,
      RegisterData.validRegisterData.password,
      RegisterData.passwordNotMatch.confirmPassword,
      RegisterData.validRegisterData.birthDate
    );

    Logger.verification("The user is entering a password that does not match");
    RegisterMethods.verifyPasswordNotMatch();
  });

  it("Empty Fields", () => {
    Logger.stepNumber(2);
    Logger.step("Register with empty fields");
    RegisterMethods.clickRegisterButton();

    Logger.verification("The user is entering empty fields");
    RegisterMethods.verifyAllFieldsAreEmpty();
    RegisterMethods.verifyBirthDateEmpty();
  });

  it("Password length invalid", () => {
    Logger.stepNumber(2);
    Logger.step("Register with invalid password length");
    RegisterMethods.singUp(
      RegisterData.validRegisterData.username,
      RegisterData.invalidPasswordLength.password,
      RegisterData.invalidPasswordLength.password,
      RegisterData.validRegisterData.birthDate
    );

    Logger.verification(
      "The user is entering a password with an invalid length"
    );
    RegisterMethods.verifyPasswordLengthInvalid();
  });
});
