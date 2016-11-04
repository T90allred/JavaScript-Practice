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
