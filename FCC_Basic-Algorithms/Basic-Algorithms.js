//-------------------------------------------------- Reverse a string --------------------------------------------------

function reverseString(str) {
  var myString = "";
  for (var i = str.length -1; i >= 0; i--) {
    myString += str[i];
  }
  return myString;
}

reverseString("Derek Allred");
