const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]/;
const uppercaseAlphabats = /^(?=.*[A-Z])/;
const lowercaseAlphabats = /^(?=.*[a-z])/;
const spacialCharacter = /^(?=.*[@.#$!%*?&])/;
const numberRegex = /^(?=.*\d)/;


export {
    emailRegex,
    passwordRegex,
    uppercaseAlphabats,
    lowercaseAlphabats,
    spacialCharacter,
    numberRegex,
}