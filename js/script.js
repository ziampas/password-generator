import { adjectives } from './adjectives.js';
import { nouns } from './nouns.js';

function generatePassword() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const specialChar = "!@#$%^&*()_+-=";
  const randomNumber = Math.floor(Math.random() * 10);
  const randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];

  const password = adjective + noun + randomNumber + randomSpecialChar;
  const passwordLength = password.length;

  return { password, passwordLength };
}

const generateBtn = document.getElementById("generate-password");
const generatedPasswordInput = document.getElementById("generated-password");
const passwordLengthElement = document.getElementById("password-length");
const copyBtn = document.getElementById("copy-to-clipboard");

generateBtn.addEventListener("click", () => {
  const { password, passwordLength } = generatePassword();
  generatedPasswordInput.value = password;
  passwordLengthElement.textContent = passwordLength;
});

generatedPasswordInput.addEventListener("input", () => {
  const passwordLength = generatedPasswordInput.value.length;
  passwordLengthElement.textContent = passwordLength;
});

copyBtn.addEventListener("click", () => {
  generatedPasswordInput.select();
  document.execCommand("copy");
  alert("Password has been copied!");
});
