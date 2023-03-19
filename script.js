// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = prompt(
    "Choose a length of at least 8 characters and no more than 128 characters"
  );

  while (length < 8 || length > 128) {
    alert("The number chosen is not valid, please try again. ");

    var length = prompt(
      "Choose a length of at least 8 characters and no more than 128 characters"
    );
  }

  var inputLowerCase = confirm(
    "Do you want to include lower case characters in your password? "
  );
  var inputUpperCase = confirm(
    "Do you want to include upper case characters in your password? "
  );
  var inputSymbol = confirm("Do you want to symbols in your password? ");
  var inputNumbers = confirm(
    "Do you want to include numbers in your password? "
  );

  while (
    inputLowerCase == false &&
    inputUpperCase == false &&
    inputSymbol == false &&
    inputNumbers == false
  ) {
    alert(
      "Please select at least one of the character styles to generate your password"
    );
    var inputLowerCase = confirm(
      "Do you want to include lower case characters in your password? "
    );
    var inputUpperCase = confirm(
      "Do you want to include upper case characters in your password? "
    );
    var inputSymbol = confirm(
      "Do you want to special characters in your password? "
    );
    var inputNumbers = confirm(
      "Do you want to include numbers in your password? "
    );
  }

  var lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseList = lowerCaseList.toUpperCase();
  var symbolList = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var numbersList = "0123456789";

  var userDefinedList = [];

  if (inputLowerCase == true) {
    userDefinedList.unshift(lowerCaseList);
  }

  if (inputUpperCase == true) {
    userDefinedList.unshift(upperCaseList);
  }

  if (inputSymbol == true) {
    userDefinedList.unshift(symbolList);
  }

  if (inputNumbers == true) {
    userDefinedList.unshift(numbersList);
  }

  function randomNumber(x) {
    return Math.floor(Math.random() * x.length);
  }

  var lengthOfArray = 0;
  var lengthOfString = 0;
  var finalProduct = "";

  for (var i = 0; i < length; i++) {
    lengthOfArray = randomNumber(userDefinedList);
    lengthOfString = randomNumber(userDefinedList[lengthOfArray]);
    finalProduct += userDefinedList[lengthOfArray][lengthOfString];
  }

  return finalProduct;
}
