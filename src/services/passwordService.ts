export default function generatePassword(passwordLength: number = 16) {
  let password: string = "";

  let characters: string = "Aa@#123456789abcdefghijFGHIJKLMNOP!";

  for (let index = 0; index < passwordLength; index++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}
