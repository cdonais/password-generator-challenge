// Assignment code here 
var passwordCharArr=[];
var lowerCaseArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr=['1','2','3','4','5','6','7','8','9','0'] ;
var specialCharArr=['!','@','#','$','%','^','&','*','(',')','-','+','='];

var generateBtn = document.querySelector("#generate");

function promptUser () {
    // prompt user for password length
     lengthEl=(window.prompt("How long would you like your password to be? Choose between 8-128 characters."))
        console.log(lengthEl);
     if (lengthEl < 8 || lengthEl > 128) {
        window.alert("Please enter a number over 8 and below 128.")
        promptUser()
    }

    // prompt user for lowercase letters
     if(confirm("Would you like to use lowercase letters?")); {
        passwordCharArr=passwordCharArr.concat(lowerCaseArr);
    }

    
    // prompt user for uppercase letters
    if(confirm("Would you like to use uppercase letters?")); {
        passwordCharArr=passwordCharArr.concat(upperCaseArr);
    }
    //prompt for numbers
    if(confirm("Would you like to use numbers?")); {
        passwordCharArr=passwordCharArr.concat(numberArr);
    }
    //prompt for special characters
    if(confirm("Would you like to use special characters?")); {
        passwordCharArr=passwordCharArr.concat(specialCharArr);
    }
}
    // create password based on selected criteria
    
    // generate password

    // Get references to the #generate element

function generatePassword(){
    var password=""
    for(var i=0; i<lengthEl; i++) {
        var randomChar=Math.floor(Math.random()*passwordCharArr.length);
        password=password + passwordCharArr[randomChar];
    }
        return password
    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
promptUser ()
generatePassword ()
