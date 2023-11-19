import { adjectives } from './adjectives.js';
import { nouns } from './nouns.js';

// Function to generate a random character from a given set
const getRandomCharacter = (characters) => characters[Math.floor(Math.random() * characters.length)];

// Function to generate a random password
const generatePassword = () => {
  const includeNumbers = document.getElementById("numbers-option").checked;
  const includeSpecialChars = document.getElementById("specialchars-option").checked;

  let characters = "";
  if (includeNumbers) characters += "0123456789";
  if (includeSpecialChars) characters += "!@#";

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  const randomNumber = includeNumbers ? Math.floor(Math.random() * 90) + 10 : '';
  const randomSpecialChar = includeSpecialChars ? getRandomCharacter("!@#+") : '';

  const password = adjective + noun + randomNumber + randomSpecialChar;
  const passwordLength = password.length;

  return { password, passwordLength };
};

// Function to display a success message
const showSuccessMessage = () => {
  const successAlert = document.createElement("div");
  successAlert.classList.add("alert", "alert-success", "my-3");
  successAlert.textContent = "Password has been copied!";

  copyBtn.parentElement.insertBefore(successAlert, copyBtn.nextSibling);

  setTimeout(() => {
    successAlert.remove();
  }, 3000);
};

// Get DOM elements
const generateBtn = document.getElementById("generate-password");
const generatedPasswordInput = document.getElementById("generated-password");
const passwordLengthElement = document.getElementById("generated-password-length");
const copyBtn = document.getElementById("copy-to-clipboard");

// Event listener for the generate password button
generateBtn.addEventListener("click", () => {
  const { password, passwordLength } = generatePassword();
  generatedPasswordInput.value = password;
  passwordLengthElement.textContent = passwordLength;
});

// Event listener for the generated password input field
generatedPasswordInput.addEventListener("input", () => {
  const passwordLength = generatedPasswordInput.value.length;
  passwordLengthElement.textContent = passwordLength;
});

// Event listener for the copy to clipboard button
copyBtn.addEventListener("click", () => {
  generatedPasswordInput.select();
  document.execCommand("copy");
  showSuccessMessage();
});

const passwordLengthSlider = document.getElementById("password-length");
const passwordLengthValue = document.getElementById("password-length-value");

// Update the displayed password length when the user changes the slider
passwordLengthSlider.addEventListener("input", () => {
  passwordLengthValue.textContent = passwordLengthSlider.value;
});
