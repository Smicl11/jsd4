// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");


// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler
// ------------------------------------
function getRestaurants(event) {
  event.preventDefault();
  var search = zip.value;
  var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

  jQuery.getJSON(url, updateRestaurants);
}

// $('form .zip').on('submit', function(e) {
//   e.preventDefault();
//   console.log(zip.value);
// });


// Update page
// ------------------------------------
function updateRestaurants(json) {
  // console.log("updateRestaurants", json);
  json.restaurants.forEach(createRestaurants);
}

function createRestaurants(restaurant) {
  console.log(restaurant.name);
  
}
