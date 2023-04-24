const adjectives = [
  'swedish',
  'warm',
  'cold',
  'funny',
  'angry',
  'green',
  'purple',
  'absent',
  'mild',
  'funny',
  'sad',
  'sweet',
];

const nouns = [
  'Summer', 
  'Winter', 
  'Koala', 
  'Summer',
  'Square',
  'Cloud',
  'Papaya',
  'Elephant',
  'Kindness',
  'Skills',
  'Questions',
  'Fish',
  'Zebra'
];

function generatePassword() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const specialChar = "!@#$%^&*()_+-=";
  const randomNumber1 = Math.floor(Math.random() * 10);
  const randomNumber2 = Math.floor(Math.random() * 10);
  const randomSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];
  
  const password = adjective + noun + randomNumber1 + randomNumber2 + randomSpecialChar;
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

copyBtn.addEventListener("click", () => {
  generatedPasswordInput.select();
  document.execCommand("copy");
});

