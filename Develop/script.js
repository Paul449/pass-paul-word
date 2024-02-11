// Assignment code here
var UpperCaseAlph = "ABCDEFGHIJKMNOPQRSTUXYX"; // declaring a variable called uppercaseAlph and assigning  lowercase letters before converting each one to uppercase
var LowerCaseAlph = "abcdefghijklmnopqrstuvwxyz"; // declaring a variable called lowercase assigning letters to stay in lowercase
var Numbers =[0,1,2,3,4,5,6,7,8,9];

//the following variables will apply for one array in order to mix all characters
var UpperArray = Array.from(UpperCaseAlph); //converting UpperCaseAlph string into an array using the Array.from() method
var LowerArray = Array.from(LowerCaseAlph); // converting LowerCaseAlph string into an arayy using the Array.from() method
var LowerAndUpper = UpperArray.concat(LowerArray);
var AllCharacters = LowerAndUpper.concat(Numbers);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //selecting the generate selector from CSS to apply functionality to it.

// Write password to the #password input



function writePassword() {
  var prompt1 = prompt("How many characters would you like for your password to contain?:"); // Prompt asking how many characters displayed on our screen
  var confirm1 = confirm("Click OK to confirm including numeric characters"); // first confirm box to make sure if employee want to have its password with numeric values either clicking OK(true)or cancel(false)
  var confirm2 = confirm("Click OK to confirm lowercase characters"); // second confirm box to make sure if employee want to have its password with lowercase values either clicking OK(true)or cancel(false)
  var confirm3 = confirm("Click OK to confirm uppercase characters"); // third confirm box to make sure if employee want to have its password with uppercase values either clicking OK(true)or cancel(false)
  for(var i = 0; i < AllCharacters.length; i++){

   if(prompt1 === password.indexOf(AllCharacters[i])){
   return confirm1;

   }else if(passwordText.value === Numbers.indexOf(AllCharacters[i])){
    return confirm1;
   } else if(passwordText.value === UpperArray.indexOf(AllCharacters[i])){
    return confirm2;
   } else if(passwordText.value === LowerArray.indexOf(AllCharacters[i])){
     return confirm3;
   }

  }
  var password = generatePassword(); // function which generates random password with specific characters from the variables declared at the beginning of this script document
  var passwordText = document.querySelector("#password"); //selecting password selector from HTMl and CSS to make it interactive using JavaScript
  passwordText.value = password; // This variable is  for


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // I want to add an event to my generate password to perform an action by using click event

