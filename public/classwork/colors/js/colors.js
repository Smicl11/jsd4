var ul = document.querySelector("ul");
var body = document.querySelector("body");

//Events
ul.addEventListener('click', changeColor);

//Fucntions
function changeColor(event) {
  //Return early if li wasn't clicked
  if (event.target.tagName != 'LI') {  
    return;
  }
  body.className = event.target.className;
}
