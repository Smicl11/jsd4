console.log("hello world");

//establish connection with firebase
// (create a new firebase db reference)
var ref = new Firebase("https://jsd-firebase-intro.firebaseio.com");

//elements
var button = document.querySelector('button');
button.addEventListener('click', handleClick);

function handleClick(e) {
  console.log('Clicked');
}
