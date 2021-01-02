// Assignment code here
let length = window.prompt("how many characters would you like your password to be? you can choose between 8 and 128");
let isUpperCase = window.prompt("Choose your password Parameters 1: Uppercase Characters?");
let isLowerCase = window.prompt("Parameter 2: Lowercase Characters?");
let isNumerical = window.prompt("Parameter 3: numbers?");
let isSpecial = window.prompt("Parameter 4: Special Characters? ");
 


function getData(isUpperCase, isLowerCase, isNumerical, isSpecial){


 
  
  
  }
      getData();

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

