/*
We will be creating a simple score keeper application using JavaScript.

The HTML and CSS has already been done for you.

Here are the steps you should take:

1: Add a link to your own custom JS file.
2: Bind click events to the +5 and -5 point buttons and change the innerHTML of the score display appropriately.
3: Bind a click event to the set score button and set the innerHTML of the score display to the score entered in the text box.

*Bonus:* Create a check in your code to make sure the score will not go negative.

*Super Bonus:* Create a function to make the changes to the score display rather than having to write your logic over and over.
*/

var scoreBox = document.querySelector("#score");
var score = parseInt(scoreBox.innerHTML, 10);

function setScore(number) {
  score = number;
  scoreBox.innerHTML = number + " Points";
}

function negativeCheck(numb) {
  if (numb < 0) {
    alert("You can't use a value less than zero. Try again.");
    return false;
  }
  else {
    return true;
  }
}

document.querySelector("#increase-5").addEventListener("click", function (event) {
  setScore(score + 5);
});

document.querySelector("#decrease-5").addEventListener("click", function (event) {
  newScore = score - 5;
  if (negativeCheck(newScore)) {
    setScore(newScore);
  }
});

document.querySelector("#submit-custom-score").addEventListener("click", function (event) {
  inputScore = parseInt(document.querySelector("#custom-score").value, 10);
  if (negativeCheck(inputScore)) {
    setScore(inputScore);
  }
});
