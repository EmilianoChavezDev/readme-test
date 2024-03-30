export class CommonPageData {
  // Devolvemos los endpoints de la API
  static get endPoints() {
    return {
      get postBook() {
        return "https://readme-backend.fly.dev/libros";
      },

      get putProfile() {
        return "https://readme-backend.fly.dev/users/profile";
      },

      get postDeleteProfile() {
        return "https://readme-backend.fly.dev/users/delete_profile";
      },

      get putPassword() {
        return "https://readme-backend.fly.dev/users/password";
      },
    };
  }

  static get appPages() {
    return {
      get login() {
        return "https://test--readme-test.netlify.app/auth/login";
      },
      get register() {
        return "https://test--readme-test.netlify.app/auth/registrarse";
      },
      get homeUrl() {
        return "https://test--readme-test.netlify.app/";
      },
      get createBookUrl() {
        return "https://test--readme-test.netlify.app/books/create";
      },
    };
  }
}
