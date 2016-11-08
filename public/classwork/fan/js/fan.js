// Firebase application setup
// ------------------------------------------------
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLfEgs7z11hnL2fVbVa_j7HChTBD8FAZ0",
  authDomain: "fan-page-fe872.firebaseapp.com",
  databaseURL: "https://fan-page-fe872.firebaseio.com",
  storageBucket: "fan-page-fe872.appspot.com",
  messagingSenderId: "78367782754"
};
firebase.initializeApp(config);

// Create Firebase application reference
// ------------------------------------------------
var db = firebase.database();


// Elements
// ------------------------------------------------
var form = document.querySelector("form");
var messageEl = document.querySelector("#message");
var messageBoard = document.querySelector(".message-board");

// Events
// ------------------------------------------------
form.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', loadState);

function submitForm(e) {
  e.preventDefault();
  var messageText = messageEl.value;
  messageEl.value = '';

  console.log(messageText);

  var ref = db.ref('messages');

  console.log(ref);

  var messageObj = {
    content: messageText,
    votes: 0
  };
  ref.push(messageObj);
}

function loadState() {
  db.ref('messages').on('value', createMessages);
}

function createMessages(results) {
  console.log('createMessages', results.val());
  var newMessages = results.val();

  //reset message board
  messageBoard.innerHTML = '';

  for(var id in newMessages) {
    createMessage(id, newMessages[id]);
  }
}

function createMessage(id, message) {
  var li = document.createElement("li");
  li.innerHTML = message.content;
  li.id = id;
  messageBoard.appendChild(li);

  li.addEventListener('click', destroyMessage);
}

function destroyMessage(event) {
  var id = event.target.id;
  //find message with objectId equal to the id we're searching for
  var ref = db.ref('messages/' + id);
  ref.remove();
}
