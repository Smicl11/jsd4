console.log("hello world");

//timeout timer
// setTimeout(function, time);
// setTimeout(changeGreen, 3000);
//
// setInterval(changeYellow, 2000);

var timeId = null;
var flashId = null;
var color = "red";

function changeColor() {
  if (color == "red") {
    color = changeGreen();
  } else if (color == "green") {
    color = changeYellow();
  } else if (color == "yellow") {
    color = changeRed();
  }
}

function start() {
  clearInterval(flashId);
  if (timeId !== null) {
    timeId = setInterval(changeColor, 2000);
  }
  console.log("started...");
}

function stop() {
  clearInterval(timeId);
  console.log("stopped");
  timeId = null;
}

function changeGreen() {
  console.log("green");
  return "green";
}

function changeYellow() {
  console.log("yellow");
  return "yellow";
}

function changeRed() {
  console.log("red");
  return "red";
}

function changeOff() {
  console.log("off");
  return "off";
}

function flash() {
  changeYellow();
  stop();
  flashId = setInterval(nightMode, 1500);
}

function nightMode() {
  if (color == "yellow"){
    color = changeOff();
  } else {
    color = changeYellow();
  }
}
