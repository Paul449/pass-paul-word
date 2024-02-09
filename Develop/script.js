// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function GenerateButton(){

  var prompt1 = prompt("How many characters would you like for your password to contain?:");
  var confirm1 = confirm("Click ok to confirm including numeric characters");
  var confirm2 = confirm("Click OK to confirm lowercase characters");
  var confirm3 = confirm("Click OK to confirm uppercase characters");
}


// Write password to the #password input

var passCharacters = "";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
