// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");
var restaurantTemplate = document.querySelector("#restaurant-template");

// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler
// ------------------------------------
function getRestaurants(event) {
  event.preventDefault();
  var search = zip.value;
  var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

  $.getJSON(url, updateRestaurants);
}


// Update page
// ------------------------------------
function updateRestaurants(json) {
  //clears old data
  results.innerHTML = '';

  //Handlebars step 2: complile the template from HTML source
  var template = Handlebars.compile(restaurantTemplate.innerHTML);

  //Handlebars step 3:
  var html = template(json);
  results.innerHTML = html;

}
