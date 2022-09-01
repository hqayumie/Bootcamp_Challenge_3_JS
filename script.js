// Assignment Code
var generateBtn = document.querySelector("#generate");

// possible character choices
let lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '/']
let selected = []

//write password to the #password input
function generatePassword() {
  let passwordlength = ["Please choose a password length between 8-128 characters"];
  while (passwordlength >= 8 || passwordlength <= 128);
  {
    passwordlength = parseInt(prompt("Please choose a password length between 8-128 characters"));
  }

  let lower = confirm('Click OK if you would like to use lower case letters');
  let upper = confirm('Click OK if you would like to use upper case letters');
  let numeric = confirm('Clikc OK if you would like to use numbers');
  let symbols = confirm('Click OK if you would like to use special characters i.e. (!, $, @, %, etc.)');

  if (lower) {
    selected.concat(lower)
  }
  if (upper) {
    selected.concat(upper)
  }
  if (numeric) {
    selected.concat(numeric)
  }

function writePassword (){
  let lower = confirm ('Click OK if you would like to use lower case letters');
  let upper = confirm ('Click OK if you would like to use upper case letters');
  if (lower == true){
    upper;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);