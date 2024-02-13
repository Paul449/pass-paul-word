
// Arrays useful for specifying all types of characters

  var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',','(','}','{',']','[','~','-','_','.']; //storing special characters in a array
  
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // storing number values in a array
  
  var lowerCaseAlph = ['a','b','c','d','e','f','g','h','i','j','k','l','m', 'n','o','p','q','r','s','t','u','v','w','x','y','z']; //storing lower case letters in a array
  
  var upperCaseAlph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; //storing uppercase letters in a array
  
var ourPasswordLength = 0;


  function optionalPassword() {
    
   ourPasswordLength = parseInt(prompt('How many characters would you like your password to contain?'), 10); // using parseInt to convert string into a number; accepting only numbers as value.
    
    if (Number.isNaN(ourPasswordLength)) { //specifying if the value typed on our prompt is a number; if not then it will display an alert box in order to generate passaword we need to input a number, otherwirse will be false
      alert('Password length must be provided as a number'); //alert box indicating the output if we do not enter a number in the prompt
      return null; // giving no value to any data type(except number)
    }
    
    if (ourPasswordLength < 8) { // password should accept at least 8 characters when typing in our prompt
      alert('Password length must be at least 8 characters');
      return null; // password less than 8 characters have no value and sohuld not be displayed on the input text box
    }
    
    if (ourPasswordLength > 128) {
      alert('Password length must be less than 129 characters'); // the maximum number value that we can type in our prompt (between 8 and 129 characters)
      return null; //password more than 129 characters have no value anymore
    }
   
    var confirm1 = confirm('Click OK to confirm addition of special characters.'); // assigning the first confirm box to add special character to our password we want to generate
    
    var confirm2 = confirm('Click OK to confirm addition of numbers.'); // assigning the second confirm box to add number values to our password we want to generate
    
    var confirm3 = confirm('Click OK to confirm addition of lowercase characters.'); // assigning the third confirm box to add lowercase letters to our password generated
    
    var confirm4 = confirm('Click OK to confirm addition of uppercase characters.'); // assigning the last confirm box to add uppercase letters to our password generated
    
    // creating an object to store variables for the prompt and the characters provided on the previous function

    var anyPassOptions = {
      ourPasswordLength: ourPasswordLength, // creating a key to store functionality of ourPasswordLength assigned on the previous function to the prompt
      confirm1: confirm1,  // creating a key to store functionality of confirm1 for special characters
      confirm2: confirm2,  // creating a key to store functionality of confirm2 for numbers
      confirm3: confirm3,  // creating a key to store functionality of confirm3 for lowercase letters
      confirm4: confirm4  // creating a key to store functionality of confirm4 for uppercase letters
    };
    return anyPassOptions; // stop execution of our object
  }
  
  function anyPassword(arr) {
    var getIndex = Math.floor(Math.random() * arr.length); // using math floor and math random to generate random characters when specifying number values in the prompt.
    var getElement = arr[getIndex]; // using bracket notation
    return getElement; // specifying we are stopping the execution of this function with the last output generated
  }
  
  function generatingOurPassword() {

    var ourOptions = optionalPassword(); //assigning key values from the object created for password options
    
    var concatCharacters = []; // adding password characters defined on my arrays of each character types at the beginning of the document

    var addingCharacters = []; // collecting our characters after specifying what characters we want to include before output

    var output = []; // array where it will contain the final password output after putting all characters together
   
    
    if (ourOptions !== ourOptions) { //specifying if putting something else that character option, it will return false

      return null;  // after indicating it is false, we give something else a not a value intentionally;

    };  

    if (ourOptions.confirm1) {
      concatCharacters = concatCharacters.concat(specialCharacters); // specifying we are adding special characters to our password
      addingCharacters.concat(specialCharacters); //generating random special characters to our password before print it.
    }
    
    
    if (ourOptions.confirm2) {
      concatCharacters = concatCharacters.concat(numbers); // adding numbers to our password
      addingCharacters.concat(numbers); //generating random numbers to our password before print it.
    }
    
    
    if (ourOptions.confirm3) {
      concatCharacters = concatCharacters.concat(lowerCaseAlph); // adding lowercase letters to
      addingCharacters.concat(lowerCaseAlph); //generating random lowercase letters to our password before print it.
    }
    
    
    if (ourOptions.confirm4) {
      concatCharacters = concatCharacters.concat(upperCaseAlph);
      addingCharacters.concat(upperCaseAlph); //generating random uppercase letters to our password before print it.
    }
    console.log(concatCharacters)
   // console.log("this is adding characters",  addingCharacters);

/*
    for (var i = 0; i < ourOptions.ourPasswordLength; i++) {
      var concatCharacters = anyPassword(concatCharacters);
      output.push(concatCharacters);
    }
    
    for (var i = 0; i < addingCharacters.ourPasswordLength; i++) {
      output[i] = addingCharacters[i];
    }
    */
    for(var i = 0; i < ourPasswordLength;i++) {
      output.push(concatCharacters[Math.floor(Math.random()*concatCharacters.length)]);
      
    }

    console.log(output);
    console.log(ourPasswordLength);
    return output.join(''); 
    
    
  }
  
  var generateBtn = document.querySelector('#generate');
  
//function to display the final output being generated on the generatingOurPassword function

  function writePassword() {
    var password = generatingOurPassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
  
  generateBtn.addEventListener('click', writePassword); // adding JS event

