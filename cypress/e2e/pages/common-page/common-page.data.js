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

      get username() {
        return "https://readme-backend.fly.dev/users/username";
      },

      get deleteProfile() {
        return "https://readme-backend.fly.dev/users/delete_profile";
      },

      get deleteCover() {
        return " https://readme-backend.fly.dev/users/delete_portada";
      },

      get password() {
        return "https://readme-backend.fly.dev/users/password";
      },

      get information() {
        return "https://readme-backend.fly.dev/users/information";
      },

      get cover() {
        return "https://readme-backend.fly.dev/users/portada";
      },

      get chapters() {
        return "https://readme-backend.fly.dev/capitulos";
      },

      get reviews() {
        return "https://readme-backend.fly.dev/resenhas";
      },

      get comments() {
        return "https://readme-backend.fly.dev/comentarios";
      },

      get favorites() {
        return "https://readme-backend.fly.dev/favoritos";
      },

      get bookReports() {
        return "https://readme-backend.fly.dev/reportes_libros";
      },

      get userReports() {
        return "https://readme-backend.fly.dev/reportes_usuarios";
      },

      get restore() {
        return "https://readme-backend.fly.dev/restore";
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
