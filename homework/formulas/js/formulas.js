
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

//converts F to C
function calcFahrenheitToCelcius(f) {
  var c = Math.round((f - 32) * 5/9);
  return c;
}

function calcCelciusToFarenheit(c) {
  var f = Math.round(c * (9/5) + 32);
  return f;
}

//calculates circumference
function calcCircumference(r) {
  r = Math.round(2 * Math.PI * r);
  return r;
}

function calcLongestSide(a, b) {
  var c = Math.round( Math.sqrt( (a * a) + (b * b) ) );
  return c;
}
