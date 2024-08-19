const passwordBox = document.querySelector("#password");

const lenght = 10;
const upperCase = "ABCDEFGHIJKLMNOPQSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "+-/*;:'{}[],./<>'.=_$#@%^&";

const allChars = upperCase + lowerCase + numbers + symbols;

function creatingPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * lowerCase.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];

  }
  passwordBox.value = password;
}

function copyPassword(){

    passwordBox.select();
    document.execCommand("copy");
}
