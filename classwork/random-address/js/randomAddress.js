// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)
var street = ["225 Bush St.", "860 Mission St.", "475 Valencia"];
var city = ["San Francisco", "Redwood City", "Palo Alto"];
var state = ["California", "Arizona", "Nevada"];



// Event Listeners
// ------------------------------------------
function generateAddress(e) {
	var randomNumber = Math.floor(Math.random() * 2);
	console.log(street[randomNumber], city[randomNumber], state[randomNumber]);
	// TODO: randomly select one item from each of these arrays
	//       and then use them to construct a random address
}



// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}
