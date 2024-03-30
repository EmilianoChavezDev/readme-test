const { Logger } = require("../support/logger");
const { CommonPageData } = require("./pages/common-page/common-page.data");
const {
  CommonPageMethods,
} = require("./pages/common-page/common-page.methods");
const { NavBarMethods } = require("./pages/navbar/navbar.methods");
const { RegisterMethods } = require("./pages/register/register.methods");

const randomUsername = CommonPageMethods.generateRandomString();
const randomPassword = CommonPageMethods.generateRandomString(8);

const randomPasswordDifferent = CommonPageMethods.generateRandomString(8);
const randomPasswordInvalidLength = CommonPageMethods.generateRandomString(4);
const randomBirthDate = CommonPageMethods.generateRandomBirthDate();
const randomBirthDateInvalid =
  CommonPageMethods.generateRandomBirthDateInvalid();

console.log(randomPassword);
console.log(randomPasswordDifferent);

describe("Register Test", () => {
  beforeEach(() => {
    Logger.stepNumber(1);
    Logger.step("Navegamos a la pagina de registrarse");
    cy.visit(CommonPageData.appPages.register);
  });

  it("Correct Register", () => {
    Logger.stepNumber(2);
    Logger.step("Registrarse con datos validos");
    RegisterMethods.signUp(
      randomUsername,
      randomPassword,
      randomPassword,
      randomBirthDate
    );

    Logger.verification("El boton de Escribe del NavBar deberia ser visible");
    NavBarMethods.verifyWriteButton();
  });

  it("User Already Exist", () => {
    Logger.stepNumber(2);
    Logger.step("Registrarse con el mismo usuario");
    RegisterMethods.signUp(
      randomUsername,
      randomPassword,
      randomPassword,
      randomBirthDate
    );

    Logger.verification("El usuario esta ingresando un usuario que ya existe");
    RegisterMethods.verifyUserAlreadyExist();
  });

  it("Password Not Match", () => {
    Logger.stepNumber(2);
    Logger.step("Registrarse con contraseña no coinciden");
    RegisterMethods.signUp(
      randomUsername,
      randomPassword,
      randomPasswordDifferent,
      randomBirthDate
    );

    Logger.verification(
      "El usuario esta ingresando una contraseña que no coincide"
    );
    RegisterMethods.verifyPasswordNotMatch();
  });

  it("Empty Fields", () => {
    Logger.stepNumber(2);
    Logger.step("Registrarse con campos vacios");
    RegisterMethods.clickRegisterButton();

    Logger.verification("El usuario esta ingresando campos vacios");
    RegisterMethods.verifyBirthDateEmpty();

    RegisterMethods.signUpEmptyFields(
      randomUsername,
      randomPassword,
      randomBirthDate
    );
    Logger.verification("El usuario esta ingresando campos vacios");
    RegisterMethods.verifyAllFieldsAreEmpty();
  });

  it("Password length invalid", () => {
    Logger.stepNumber(2);
    Logger.step("Registrarse con una contraseña de longitud invalida");
    RegisterMethods.signUp(
      randomUsername,
      randomPasswordInvalidLength,
      randomPasswordInvalidLength,
      randomBirthDate
    );

    Logger.verification(
      "El usuario esta ingresando una contraseña de longitud invalida"
    );
    RegisterMethods.verifyPasswordLengthInvalid();
  });

  it("Birth Date Invalid", () => {
    Logger.stepNumber(2);
    Logger.step("Registrarse con una fecha de nacimiento invalida");
    RegisterMethods.signUp(
      randomUsername,
      randomPassword,
      randomPassword,
      randomBirthDateInvalid
    );

    Logger.verification(
      "El usuario esta ingresando una fecha de nacimiento invalida"
    );
    RegisterMethods.verifyBirthDateInvalid();
  });
});
