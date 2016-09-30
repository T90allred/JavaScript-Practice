var myArray = ["Derek","Sam","Liam","Maxen","Rae","Carter"];

function printReverse(theArray) {
  counter = myArray.length;
  while (counter >= 0) {
    console.log(myArray[counter]);
    counter--;
  }
}
printReverse(myArray);

//****** IS UNIFORM

function isUniform(secondArray) {
    var first = secondArray[0];
    for(var i = 1; i < secondArray.length; i++)
    {
      if (secondArray[i] !== first) {
        return false;
      }
    }
    return true;
  }

isUniform([1,1,1,1,3]);

//SumArray

function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element){
    total += element;
  });
  return total;
}

//Max

function max(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++)
  {
    if (arr[i] > max ) {
      max = arr[i];
    }
  }
  return max;
}


//********** myForEach funtion!

var colors = ["red","yellow","orange"];
function myForEach(arr, func) {
  for(var i = 0; i < arr.length; i++)
  {
    func(arr[i]);
  }
}


var movies = [
  {
    title: "Cinderella Man",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Dawn of Justice",
    hasWatched: false,
    rating: 3
  },
  {
    title: "Frozen",
    hasWatched: true,
    rating: 4.5
  }
];

movies.forEach(function(movie){
  buildResult(movie);
});

function buildResult(thing) {
  var result = "You have ";
  if (thing.hasWatched === true) {
    result += "seen ";
  } else {
    result += "not seen ";
  }
  result += "\"" + thing.title + "\" - ";
  result += thing.rating + " stars";
  return console.log(result);
}


var comments = {};

comments.data = ["Cool", "way cool", "sweet bro"];


comments.print = function (){
this.data.forEach(function(ele){
  console.log(ele);
});
};
