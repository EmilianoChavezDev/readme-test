export class CommonPageData {
  // Devolvemos los endpoints de la API
  static get endPoints() {
    return {
      get books() {
        return "https://readme-backend.fly.dev/libros";
      },

      get profile() {
        return "https://readme-backend.fly.dev/users/profile";
      },

      get deleteProfile() {
        return "https://readme-backend.fly.dev/users/delete_profile";
      },

      get password() {
        return "https://readme-backend.fly.dev/users/password";
      },

      get postLogin() {
        return "https://readme-backend.fly.dev/login";
      },

      get chapters() {
        return "https://readme-backend.fly.dev/capitulos";
      },
    };
  }

  static get appPages() {
    return {
      get baseUrl() {
        return "https://test--readme-test.netlify.app/";
      },

      get loginUrl() {
        return "https://test--readme-test.netlify.app/auth/login";
      },

      get registerUrl() {
        return "https://test--readme-test.netlify.app/auth/registrarse";
      },
    };
  }
}
