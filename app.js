const choices = document.querySelector("#select_choice");
const pass_length = document.querySelector(".pass_length");
const button = document.getElementById("generate_pass_btn");
const result = document.querySelector(".result");
let output = document.querySelector(".output");

// datasets
// medium
const numAndString =
  "1234567890abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// hard
const letters = "!@#$%^&*" + numAndString + "!@#$%^&*";

// generating index while calculating password
function generateIndex(length) {
  return Math.floor(Math.random() * length);
}

// for easy Password
function EasyPass(length) {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * (9 * Math.pow(10, length - 1))
  );
}

// for medium Password
function mediumPass(length) {
  let password = "";
  while (length--) {
    let index = generateIndex(numAndString.length);
    password += numAndString[index];
  }
  return password;
}

// for Hard Password
function hardPass(length) {
  let password = "";
  while (length--) {
    let index = generateIndex(letters.length);
    password += letters[index];
  }
  return password;
}

// making passWord Visible

function MakeVisible() {
  output.classList.add("showPassword");
}

function display(value) {
  result.innerHTML = value;
  MakeVisible();
}

// main Function
function GeneratePassword() {
  let choice = choices.value;
  let passSize = pass_length.value;

  if (passSize != 0) {
    switch (choice) {
      case "easy":
        display(EasyPass(passSize));
        break;
      case "medium":
        display(mediumPass(passSize));
        break;
      case "hard":
        display(hardPass(passSize));
        break;

      default:
        alert("Sorry to process.");
        break;
    }
  } else {
    alert("Please Enter Size");
  }
}

button.addEventListener("click", GeneratePassword);
