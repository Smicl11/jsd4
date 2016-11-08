// Elements
// ------------------------------------------
var form = document.querySelector("body form");


// Events
// ------------------------------------------
form.addEventListener('submit', createThing);


// Update page
// ------------------------------------------
function createThing(e) {
	e.preventDefault();
	console.log('createThing');
	var thing = form.value;
	// form.querySelector('.things').closest('li').after(createItem(	));

	// TODO: take value typed into input box and
	// add to list

}
