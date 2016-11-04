//-------------------------------------------------- Reverse a string --------------------------------------------------

function reverseString(str) {
  var myString = "";
  for (var i = str.length -1; i >= 0; i--) {
    myString += str[i];
  }
  return myString;
}

reverseString("Derek Allred");

//-------------------------------------------------- Factorialize a Number --------------------------------------------------

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
    return num * factorialize(num-1);
}

factorialize(5);

//-------------------------------------------------- Check for Palindromes --------------------------------------------------

function palindrome(str) {

 var notValid = /[^A-Za-z0-9]/g;

 str = str.toLowerCase().replace(notValid, '');

 var length = str.length;

 for (var i = 0; i < length/2; i++) {

   if (str[i] !== str[length - 1 - i]) {
       return false;
   }

 }
 return true;
}
palindrome("eye");
