// Assignment code here
let length = number(prompt("how many characters would you like your password to be? you can choose between 8 and 128"));
let charType = prompt("Choose character type: special, numeric, uppercase, lowercase");


 


function getData(){
    if(charType.toLowerCase ==="lowercase")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz";
    }

    else if(charType.toLowerCase ==="uppercase")
    {
        charSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if(charType.toLowerCase ==="numeric")
    {
        charSet ="1234567890";
    }

    else if(charType.toLowerCase ==="special")
    {
        charSet ="!@#$%^&*()_+-=";
    }

 
  
  
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

