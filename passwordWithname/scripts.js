let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");
let namePassBox = document.getElementById("namePassBox");
let namecheck = document.getElementById("namecheck");

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*()";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
  sliderValue.textContent = inputSlider.value;
});

namecheck.addEventListener("change", () => {
  namePassBox.disabled = !namecheck.checked;
});

genBtn.addEventListener("click", () => {
  passBox.value = namecheck.checked ? generatePasswordFromName() : generateRandomPassword();
});

copyIcon.addEventListener("click", () => {
  if (passBox.value) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 3000);
  }
});

function generatePasswordFromName() {
  let name = namePassBox.value.replace(/[^a-zA-Z]/g, ""); 
  if (name.length === 0) return "Enter a valid name!";

  let password = "";
  let options = "";

  if (lowercase.checked) options += lowerChars;
  if (uppercase.checked) options += upperChars;
  if (numbers.checked) options += allNumbers;
  if (symbols.checked) options += allSymbols;

  if (options.length > 0) {
    for (let i = name.length; i < inputSlider.value; i++) {
      name += options.charAt(Math.floor(Math.random() * options.length));
    }
  }

  password = shuffleString(name);
  return password;
}

function generateRandomPassword() {
  let allChars = "";
  let genPassword = "";

  if (lowercase.checked) allChars += lowerChars;
  if (uppercase.checked) allChars += upperChars;
  if (numbers.checked) allChars += allNumbers;
  if (symbols.checked) allChars += allSymbols;

  if (allChars.length === 0) return "Select at least one option!";

  for (let i = 0; i < inputSlider.value; i++) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return genPassword;
}

function shuffleString(str) {
  return str.split("").sort(() => Math.random() - 0.5).join("");
}
