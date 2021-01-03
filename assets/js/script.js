// Assignment code here
let length = prompt("how many characters would you like your password to be? you can choose between 8 and 128 ");
let charType = prompt("Choose character type: special, numeric, uppercase, lowercase. (use a comma and a space after each word) WARNING: some combinations will not work!");


 


function generatePassword(){
    var charSet = "";
    var charTypeLower =charType.toLowerCase();


    //single selection

    if(charTypeLower ==="lowercase" )
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


    //double selction combo

    else if(charTypeLower ==="lowercase, " + "numeric" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz1234567890";
    }

    else if(charTypeLower ==="numeric, " + "lowercase" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz1234567890";
    }

    else if(charTypeLower ==="lowercase, " + "uppercase" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if(charTypeLower ==="uppercase, " + "lowercase" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if(charTypeLower ==="lowercase, " + "special" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=";
    }

    else if(charTypeLower ==="special, " + "lowercase" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=";
    }

    else if(charTypeLower ==="special, " + "numeric" )
    {
        charSet ="1234567890!@#$%^&*()_+-=";
    }

    else if(charTypeLower ==="numeric, " + "special" )
    {
        charSet ="1234567890!@#$%^&*()_+-=";
    }

    else if(charTypeLower ==="uppercase, " + "special" )
    {
        charSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=";
    }

    else if(charTypeLower ==="special, " + "uppercase" )
    {
        charSet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=";
    }

    //triple selection combo

    else if(charTypeLower ==="lowercase, " + "special, " + "uppercase" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if(charTypeLower ==="special, " + "lowercase, " + "uppercase" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if(charTypeLower ==="special, " + "uppercase, " + "lowercase" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if(charTypeLower ==="uppercase, " + "lowercase, " + "special" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if(charTypeLower ==="numeric, " + "lowercase, " + "uppercase" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if(charTypeLower ==="special, " + "numeric, " + "lowercase" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=1234567890";
    }

    else if(charTypeLower ==="uppercase, " + "numeric, " + "special" )
    {
        charSet ="!@#$%^&*()_+-=1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    else if(charTypeLower ==="numeric, " + "lowercase, " + "special" )
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=1234567890";
    }

    //quadruple selection combo
    else if(charTypeLower ==="numeric, " + "uppercase, " + "special, " + "lowercase")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }

    else if(charTypeLower ==="lowercase, " + "special, " + "uppercase, " + "numeric")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }
    else if(charTypeLower ==="special, " + "uppercase, " + "numeric, " + "lowercase")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }
    else if(charTypeLower ==="uppercase, " + "numeric, " + "lowercase, " + "special")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }
    else if(charTypeLower ==="numeric, " + "lowercase, " + "special, " + "uppercase")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }
    else if(charTypeLower ==="special, " + "lowercase, " + "uppercase, " + "numeric")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }
    else if(charTypeLower ==="lowercase, " + "uppercase, " + "special, " + "numeric")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }
    else if(charTypeLower ==="uppercase, " + "special, " + "numeric, " + "lowercase")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }
    else if(charTypeLower ==="lowercase, " + "numeric, " + "uppercase, " + "special")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }

    else if(charTypeLower ==="special, " + "numeric, " + "uppercase, " + "lowercase")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }

    else if(charTypeLower ==="numeric, " + "special, " + "uppercase, " + "lowercase")
    {
        charSet ="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    }
    
    
    

  var retVal = "";
  for (var i = 0; i < length; i++) {
    
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}



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

writePassword()