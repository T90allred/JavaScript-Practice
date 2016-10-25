document.getElementById("redCircle").onclick = function () {
  document.getElementById("redCircle").style.display = "none";
};
document.getElementById("blueCircle").onclick = function () {
  document.getElementById("blueCircle").style.display = "none";
};
document.getElementById("yellowCircle").onclick = function () {
  document.getElementById("yellowCircle").style.display = "none";
};

document.getElementById("test-button").onclick = function () {
  var inputText = "";
  inputText = document.getElementById("text-input").value;
  document.getElementById("test-text").innerHTML = inputText;
};

var items = ["Paint Ball Gun", "Shoes", "Laptop", "other"];
items.push("Fire");
items.splice(3,1);
items.splice(items.length,0,"Test");
items.splice(0,1,"First");

for (var i = 0; i < items.length; i++) {
  console.log(items[i]);
}

document.getElementById("magicButton").onclick = function () {
  var spell = document.getElementById("spell").value;
  var correctSpell = "crusio";
  if (spell == correctSpell) {
    alert("You just performed an illegal curse!");
  }else{
    alert("FLOP!");
  }
};
