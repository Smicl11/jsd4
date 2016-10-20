var ul = document.querySelector("ul");
var body = document.querySelector("body");

//Events
ul.addEventListener('click', changeColor);

//Fucntions
function changeColor(event) {
  body.className = event.target.className;
}
