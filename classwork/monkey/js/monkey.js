/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

var monkey1 = {
  name: "Schutte",
  species: "spider monkey",
  foodsEaten: ["bananas", "cococuts", "dignity"],
  eatSomething: function(thingAsString) {
    var food = this.foodsEaten[0];
    console.log(food);
  },
  introduce: function() {
    console.log("Hi, my name is", this.name, ".", "I'm a", this.species, "and I just ate", this.foodsEaten[0]);
  }
};

var monkey2 = {
  name: "Banana McBananaFace",
  species: "regular monkey",
  foodsEaten: ["apple", "cigars", "children"],
  eatSomething: function(thingAsString) {

  },
  introduce: function() {

  }
};

var monkey3 = {
  name: "Hambre",
  species: "gorilla",
  foodsEaten: ["justice", "bananas", "not children"],
  eatSomething: function(thingAsString) {

  },
  introduce: function() {

  }
};
