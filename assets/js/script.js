// Assignment code here
let length = window.prompt("how many characters would you like your password to be? you can choose between 8 and 128");
let type = window.prompt("Choose character type: special, numeric, uppercase, lowercase");


 


function getData(isUpperCase, isLowerCase, isNumerical, isSpecial){
    if


 
  
  
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

