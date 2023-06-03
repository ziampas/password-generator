import { adjectives } from './adjectives.js';
import { nouns } from './nouns.js';
import { phrases } from './phrases.js';

const generatePassword = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const specialChars = "!@#+";
  const randomNumber = Math.floor(Math.random() * 90) + 10; // Generates a random number between 10 and 99
  const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

  const password = `${adjective}${noun}${randomNumber}${randomSpecialChar}`;
  const passwordLength = password.length;

  return { password, passwordLength };
};

const generateBtn = document.getElementById("generate-password");
const generatedPasswordInput = document.getElementById("generated-password");
const passwordLengthElement = document.getElementById("password-length");
const copyBtn = document.getElementById("copy-to-clipboard");
const passwordPhraseElement = document.getElementById("passwordPhrase");

let previousPhrase = null;

const updatePasswordPhrase = () => {
  let randomPhrase;

  do {
    randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  } while (randomPhrase === previousPhrase);

  passwordPhraseElement.textContent = randomPhrase;
  previousPhrase = randomPhrase;
};

generateBtn.addEventListener("click", () => {
  const { password, passwordLength } = generatePassword();
  generatedPasswordInput.value = password;
  passwordLengthElement.textContent = passwordLength;
  updatePasswordPhrase();
});

generatedPasswordInput.addEventListener("input", () => {
  const passwordLength = generatedPasswordInput.value.length;
  passwordLengthElement.textContent = passwordLength;
});

copyBtn.addEventListener("click", () => {
  generatedPasswordInput.select();
  document.execCommand("copy");

  const successAlert = document.createElement("div");
  successAlert.classList.add("alert", "alert-success", "my-3");
  successAlert.textContent = "Password has been copied!";

  copyBtn.parentElement.insertBefore(successAlert, copyBtn.nextSibling);

  setTimeout(() => {
    successAlert.remove();
  }, 3000);
});