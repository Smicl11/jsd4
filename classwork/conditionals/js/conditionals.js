console.log("hello world");

//if statements
var grade = prompt("What is your Grade?");

if (grade == "A") {
  console.log("Awesome Job!");
} else {
  console.log("if: do better!");
}

//switch statements (you compare one value against a list of options)
switch(grade) {
  case 'A':
    console.log("Awesome Job!");
    break;
  case 'B':
    console.log("do better!");
    break;
  default:
    console.log("Case: Get your life together!");
}
