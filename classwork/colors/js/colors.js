var ul = document.querySelector("ul");
var body = document.querySelector("body");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var green = document.querySelector(".green");
var rebeccapurple = document.querySelector(".rebeccapurple");

//Events
red.addEventListener('click', changeRed);
blue.addEventListener('click', changeBlue);
green.addEventListener('click', changeGreen);
rebeccapurple.addEventListener('click', changeRebeccapurple);
ul.addEventListener('click', changeColor);

//Fucntions
function changeColor(event) {
  // console.log('hi', event.target.className);
  body.className = event.target.className;
}

function changeRed() {
  body.className = "blue";
}

function changeBlue() {
  body.className = "black";
}

function changeGreen() {
  body.className = "orange";
}

function changeRebeccapurple() {
  body.className = "lightblue";
}
