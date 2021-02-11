// Assignment code here
//! This function chooses which type of character will enter into the password
function characterChoiceGenerator(letters, letCaps, numbers, special) {
  let num = 3;
  let character;
  let randNum = Math.floor(Math.random() * num);

  if (letters === false && randNum === 0) {
    ++randNum;
  }
  if (numbers === false && randNum === 1) {
    ++randNum;
  }
  if (special === false && randNum === 2) {
    randNum = 0;
  }
  if (letters === false && numbers === false) {
    randNum = 2;
  }
  if (letters === false && special === false) {
    randNum = 1;
  }
  if (numbers === false && special === false) {
    randNum = 0;
  }

  if (randNum == 0 && letters && letCaps) {
    character = generateRandomLetter(letters, letCaps);
    return character;
  } else if (randNum == 0 && letters && letCaps === false) {
    character = generateRandomLetter(letters, letCaps);
    return character;
  } else if (randNum == 1 && numbers) {
    character = generateRandomNumber(numbers);
    return character;
  } else if (randNum == 2 && special) {
    character = generateRandomSpecial(special);
    return character;
  }
}

//! This function generates a Random Letter
function generateRandomLetter(letters, letCaps) {
  let lettersP = "abcdefghijklmnopqrstuvwxyz";
  let both = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letter = "";

  if (letters && letCaps) {
    letter = both[Math.floor(Math.random() * both.length)];
  } else if (letters && letCaps == false) {
    letter = lettersP[Math.floor(Math.random() * lettersP.length)];
  }
  return letter;
}

//! This function generates a Random Number
function generateRandomNumber(numbers) {
  let numbersP = "0123456789";
  let number = "";

  if (numbers) {
    number = numbersP[Math.floor(Math.random() * numbersP.length)];
  }
  return number;
}

//! This function generates a Random Special Character
function generateRandomSpecial(special) {
  let specialP = "_-!@#$%^&*";
  let specialChar = "";

  if (special) {
    specialChar = specialP[Math.floor(Math.random() * specialP.length)];
  }
  return specialChar;
}

//! This function generates a Password
function generatePassword(passwordLength, letters, letCaps, numbers, special) {
  let password = "";

  for (let i = 0; i < passwordLength; ++i) {
    password =
      password + characterChoiceGenerator(letters, letCaps, numbers, special);
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//! Write password to the #password input
function writePassword() {
  let letCaps = false;
  let numbers = false;
  let special = false;
  let letters = false;

  //! Prompt for Password Length
  let passwordLength = prompt(
    "How long do you want your password?" +
      "\n" +
      "!!! Please note that your password length must be between 8 and 128 characters long !!! "
  );
  if (passwordLength < 7 || passwordLength > 128) {
    alert("PASSWORD MUST BE BETWEEN 8 AND 128 CHARACTERS LONG");
    return 0;
  }
  //! Prompt for Letters in Password
  letters = prompt(
    "Do you want letters in your password?" + "\n" + "Yes or No"
  );
  if (letters === "yes" || letters === "Yes") {
    letters = true;
    let caps = prompt("Capital Letters?" + "\n" + "Yes or No");
    if (caps === "yes" || caps === "Yes") {
      letCaps = true;
    } else {
      letCaps = false;
    }
  } else {
    letters = false;
  }
  //! Prompt for numbers in Password
  numbers = prompt(
    "Do you want numbers in your password?" + "\n" + "Yes or No"
  );
  if (numbers === "yes" || numbers === "Yes") {
    numbers = true;
  } else {
    numbers = false;
  }
  //! Prompt for special characters in Password
  special = prompt(
    "Do you want any special characters in your Password?" + "\n" + "Yes or No"
  );
  if (special === "yes" || special === "Yes") {
    special = true;
  } else {
    special = false;
  }

  var password = generatePassword(
    passwordLength,
    letters,
    letCaps,
    numbers,
    special
  );
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//! Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
