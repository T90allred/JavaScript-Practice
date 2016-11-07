// var firstName = "Derek";
// console.log(firstName);
//
// var lastName = "Allred";
// console.log(lastName);
//
// var age = 26;
// console.log(age);

var name = "Derek ";
var age = 26;

console.log(name + age);
console.log(age);

var job, isMarried;
job = "Software Engineer";
isMarried = true;

console.log(job, isMarried);

var job = prompt("What is your job?");



switch (job){
  case "Teacher":
  console.log("He teaches kids");
  break;
  case "Driver":
  console.log("He drives people");
  break;
  case "Cop":
  console.log("He fights crime");
  break;
  default:
  console.log("Other");
}



//Game

var friend1Height = 60;
var friend1Age = 24;
var friend2Height = 68;
var friend2Age = 23;


var scoreFriend1 = friend1Height + (friend1Age * 5);

var scoreFriend2 = friend2Height + (friend2Age * 5);
console.log(scoreFriend1,scoreFriend2);
if (scoreFriend1 > scoreFriend2) {
  console.log("Friend 1 is the winner");
}
else if (scoreFriend1 < scoreFriend2) {
  console.log("Friend 2 is the winner");
}
else {
  console.log("It is a tie!");
}

var names = ["Derek", "Sam", "Rae", "Carter"];
var ages = new Array(26,21,0);

console.log(names);
console.log(ages);
console.log(names.length);
console.log(names.indexOf("Sam"));

var Derek = {
  name: "Derek",
  lastName: "Allred",
  yearOfBirth: 1990,
  job: "Software Engineer",
  isMarried: true,
  family: ["Sam","Karen","Jeff","Brandon","Ashley","Acelynn","Everly","Alyssa","Danny","Caden","Kaylee"],
  calculateAge: function( ) {
    this.age = 2016 - this.yearOfBirth;
  }
};
Derek.calculateAge();
console.log(Derek);
