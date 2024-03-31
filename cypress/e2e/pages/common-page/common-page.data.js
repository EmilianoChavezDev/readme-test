export class CommonPageData {
  static postBook = "https://readme-backend.fly.dev/libros";

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

      get postLogin() {
        return "https://readme-backend.fly.dev/login";
      },
    };
  }

  static get appPages() {
    return {
      get loginUrl() {
        return "https://test--readme-test.netlify.app/auth/login";
      },

      get registerUrl() {
        return "https://test--readme-test.netlify.app/auth/registrarse";
      },

      get homeUrl() {
        return "https://test--readme-test.netlify.app/";
      },

      get createBookUrl() {
        return "https://test--readme-test.netlify.app/books/create";
      },

      get myBooksUrl() {
        return "https://test--readme-test.netlify.app/books/mybooks";
      },
    };
  }
}
