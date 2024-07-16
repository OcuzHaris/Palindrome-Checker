"use strict";

// 1. Rijec iz input fielda da pretvorimo u lower-case
// 2. Rijec iz input fielda da rotiramo
// 3. Check button funkcija da provijeri da li je palindrome
// 4. Prikazati rezultati u paragrafu

const inputField = document.querySelector(".input-field");
const checkButton = document.querySelector(".check-button");
let result = document.querySelector(".result");

// Check Palindrome function

const checkPalindrome = function () {
  // make the entry lower case
  const lowerCase = inputField.value.toLowerCase();
  // reverse the entered lower case word

  //   1. First split word into an array of char.
  //   2. Reverse the order of the array
  //   3. Join the char into a word again (reverse word)
  const reverseWord = lowerCase.split("").reverse().join("");

  // If statement
  if (lowerCase === reverseWord && reverseWord.length >= 3) {
    result.textContent = `${lowerCase} is a palindrome. ✅`;
  } else if (lowerCase !== reverseWord && reverseWord.length >= 3) {
    result.textContent = `${lowerCase} is not a palindrome. ❌`;
  } else if (reverseWord.length < 3) {
    alert("Please enter a word with at least 3 characters! 🔧");
  }
};
checkButton.addEventListener("click", function () {
  checkPalindrome();
});

inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkPalindrome();
    console.log("enter");
  }
});
