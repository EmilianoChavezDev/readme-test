export class CommonPageMethods {
  // Metodo para generar una nacionalidad aleatoria
  static randomNationality() {
    let nationalities = ["Paraguay", "Argentina", "Chile", "Peru", "Mexico"];
    let randomIndex = Math.floor(Math.random() * nationalities.length);
    return nationalities[randomIndex];
  }

  // Metodo para generar un string aleatorio
  static generateRandomString(length = 10) {
    let result = "";
    const characters =
      "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // Metodo para generar una fecha de nacimiento invalida
  static generateRandomBirthDateInvalid() {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    return formattedDate;
  }

  // Metodo para generar una fecha de nacimiento aleatoria
  static generateRandomBirthDate() {
    const currentDate = new Date();
    const minBirthYear = currentDate.getFullYear() - 15; // Restar 15 años al año actual
    const maxBirthYear = minBirthYear - 100; // La persona debe tener al menos 15 años
    const randomBirthYear =
      Math.floor(Math.random() * (minBirthYear - maxBirthYear + 1)) +
      maxBirthYear;

    const randomBirthMonth = Math.floor(Math.random() * 12); // Generar un mes aleatorio
    const randomBirthDay = Math.floor(Math.random() * 28) + 1; // Generar un día aleatorio entre 1 y 28

    const date = new Date(randomBirthYear, randomBirthMonth, randomBirthDay);

    // Formatear la fecha a 'YYYY-MM-DD'
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  }
}
