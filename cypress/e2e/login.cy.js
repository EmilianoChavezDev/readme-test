import { LoginData } from "./pages/login/login.data";
import { LoginElements } from "./pages/login/login.elements";
import { LoginMethods } from "./pages/login/login.methods";
import { NavBarElements } from "./pages/navbar/navbar.elements";

// Login test
describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("https://test--readme-test.netlify.app/auth/login");
  });

  it("Correct Login", () => {
    LoginMethods.login(
      LoginData.validCredentials.username,
      LoginData.validCredentials.password
    );

    cy.request({
      method: "POST",
      url: "https://readme-backend.fly.dev/login",
      body: {
        username: LoginData.validCredentials.username,
        password: LoginData.validCredentials.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(LoginData.validCredentials.username);
      expect(response.body.token).to.exist;
    });

    NavBarElements.buttons.writeButton.should("be.visible");
  });

  it("Incorrect Login", () => {
    LoginMethods.login(
      LoginData.invalidCredentials.username,
      LoginData.invalidCredentials.password
    );

    cy.request({
      method: "POST",
      url: "https://readme-backend.fly.dev/login",
      body: {
        username: LoginData.invalidCredentials.username,
        password: LoginData.invalidCredentials.password,
      },
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(401);
      expect(response.body.error).to.eq("Invalid username or password");
    });

    cy.contains("p", "Usuario o contraseña no valido").should("be.visible");
  });

  it("Empty Fields", () => {
    LoginMethods.clickLoginButton();

    LoginElements.textBoxes.username
      .focused()
      .should("have.attr", "name", "username");
  });
});
