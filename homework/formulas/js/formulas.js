
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

//converts F to C
function calcFahrenheitToCelcius(F) {
  var C = Math.round((F - 32) * 5/9);
  return C;
}

function calcCelciusToFarenheit(C) {
  var F = Math.round(C * (9/5) + 32);
  return F;
}

//calculates circumference
function calcCircumference(R) {
  R = Math.round(2 * Math.PI * R);
  return R;
}

function calcLongSide(Height, Width) {

}
