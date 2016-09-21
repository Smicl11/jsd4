
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

//converts F to C
function calcFahrenheitToCelcius(F) {
  F = Math.round(F);
  var C = ((F - 32) * 5/9);
  C = Math.round(C);
  return C;
}

function calcCelciusToFarenheit(C) {
  C = Math.round(C);
  var F = (C * (9/5) + 32);
  F = Math.round(F);
  return F;
}

//calculates circumference
function calcCircumference(C) {

}

function calcLongSide(Height, Width) {

}
