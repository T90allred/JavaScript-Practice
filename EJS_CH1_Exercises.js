//--------------------------Loop practice---------------------
var iterations = 7;
var string = "#";

for (var i = 0; i < iterations; i++) {
  console.log(string);
  string += "#";
}

// ------------------------Good old FizzBuzz----------------
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else if (i % 3 === 0 ) {
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}

// nested loops to create a check board pattern in a single string.
var setSize = 8;
var chessBoard = "";

for (var y = 0; y < setSize; y++) {
  for (var x = 0; x < setSize; x++) {
    if ((x + y) % 2 == 0)
      chessBoard += " ";
    else
      chessBoard += "#";
  }
  chessBoard += "\n";
}

console.log(chessBoard);

//------------chessboard with user input-----------------
var customSize = prompt("Please enter the board size you would like");
var board = "";

for (var b = 0; b < customSize; b++) {
  for (var a = 0; a < customSize; a++) {
    if ((a + b) % 2 === 0) {
      board += " ";
    }
    else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
