// Assignment code here

let length = number(prompt("how many characters would you like your password to be? you can choose between 8 and 128"));
let charType = prompt("Choose character type: special, numeric, uppercase, lowercase");


 


function generatePassword(){
    var charSet = "";
    var charTypeLower =charType.toLowerCase();

    if(charTypeLower ==="lowercase")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz";
    }

    else if(charTypeLower ==="uppercase")
    {
        charSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if(charTypeLower ==="numeric")
    {
        charSet ="1234567890";
    }

    else if(charTypeLower ==="special")
    {
        charSet ="!@#$%^&*()_+-=";
    }

    //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
alert(generatePassword());


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

