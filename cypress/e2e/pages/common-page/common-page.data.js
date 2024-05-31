const API_BASE_URL = 'http://localhost:4000'
const WEB_BASE_URL = 'http://localhost:3001/'

export class CommonPageData {


  // Devolvemos los endpoints de la API
  static get endPoints() {
    return {
      get books() {
        return `${API_BASE_URL}/libros`
      },

      get profile() {
        return `${API_BASE_URL}/users/profile`
      },

      get username() {
        return `${API_BASE_URL}/users/username`
      },

      get deleteProfile() {
        return `${API_BASE_URL}/users/delete_profile`
      },

      get deleteCover() {
        return ` ${API_BASE_URL}/users/delete_portada`
      },

      get password() {
        return `${API_BASE_URL}/users/password`
      },

      get information() {
        return `${API_BASE_URL}/users/information`
      },

      get cover() {
        return `${API_BASE_URL}/users/portada`
      },

      get chapters() {
        return `${API_BASE_URL}/capitulos`
      },

      get reviews() {
        return `${API_BASE_URL}/resenhas`
      },

      get comments() {
        return `${API_BASE_URL}/comentarios`
      },

      get favorites() {
        return `${API_BASE_URL}/favoritos`
      },

      get bookReports() {
        return `${API_BASE_URL}/reportes_libros`
      },

      get userReports() {
        return `${API_BASE_URL}/reportes_usuarios`
      },

      get restore() {
        return `${API_BASE_URL}/restore`
      },
    }
  }

  static get appPages() {
    return {
      get baseUrl() {
        return WEB_BASE_URL
      },

      get loginUrl() {
        return `${WEB_BASE_URL}auth/login`
      },

      get registerUrl() {
        return `${WEB_BASE_URL}auth/registrarse`
      },
    }
  }
}
