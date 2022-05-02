// Assignment code here 
function generatePassword () {
    // prompt user for password length
    var lengthEl=window.prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
    if (lengthEl === "" || lengthEl === null) {
        window.alert("Please provide a valid answer.")    
    }
    // prompt user for lowercase letters
    var lowercaseEl=window.prompt("Would you like to use lowercase letters? Please answer 'YES' or 'NO'");
    if (lowercaseEl === YES || lowercaseEl === yes) {
        
    }
    
    // prompt user for uppercase letters
    var uppercaseEl=window.prompt("Would you like to use uppercase letters? Please answe 'YES' or 'NO'");
    if (uppercaseEl === YES || uppercaseEl === yes){

    }
    //prompt for numbers
    var numberEl=window.prompt("Would you like to use numbers? Please answer 'YES' or 'NO'");
    if (numberEl === YES || numberEl === yes) {

    }
    // prompt user for special characters
    var specialEl=window.prompt("Would you like to use special characters? Please answer 'YES' or 'NO'");
    if (specialEl === YES || specialEl === yes){

    }
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