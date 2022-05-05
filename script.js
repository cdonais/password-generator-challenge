// Assignment code here 
var lowerCaseArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCaseArr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberArr=['1','2','3','4','5','6','7','8','9','0'] 
var specialCharArr=['!','@','#','$','%','^','&','*','(',')','-','+','=']

function generatePassword () {
    // prompt user for password length
    const lengthEl=Number(window.prompt("How long would you like your password to be? Choose between 8-128 characters."))
    if (lengthEl < 8 || lengthEl > 128) {
        window.alert("Please enter a number over 8 and below 128.")
    }

    // prompt user for lowercase letters
    var addLower=window.prompt("Would you like to use lowercase letters?");
    if (addLower === YES || addLower === yes) {
         for (let i=1; i<=lengthEl; i++) {
            let password=(Math.floor(Math.random) * lengthEl)
         }
    }
    //if yes, include in password
    
    // prompt user for uppercase letters
    var addUpper=window.prompt("Would you like to use uppercase letters?");
    if (addUpper === YES || addUpper === yes) {
        for (let i=1; i<lengthEl; i++) {
            let password=(Math.floor(Math.random)*lengthEl)
        }

    }
    //if yes, include in password
    
    //prompt for numbers
    var addNum=window.prompt("Would you like to use numbers?");
    if (addNum === YES || addNum === yes){
        let password=(Math.floor(Math.random)* lengthEL)
    }
    //if yes, include in password
    
    //prompt for special characters
    var addSpec=window.prompt("Would you like to use special characters?");
    if (addSpec === YES || addSpec === yes) {
        let password=(Math.floor(Math.random)* lengthEl)
    }
    //if yes, include in password
    
    // create password based on selected criteria
    
    // generate password

    // Get references to the #generate element
    return value;
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
writePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);