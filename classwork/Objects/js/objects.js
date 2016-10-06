console.log("hello world");

var flight = {
  origin: "SFO",
  destination: "DEN",
  wifi: false,
  distance: 800,
  status: "delayed"
};

var car = {
  make: "Subaru",
  model: "Forrester",
  year: 2013,
  color: "green",
  insurance: {
    provider: "Progressive",
    policyNumber: 214423
  },
  miles: 324234,
  on: false,

  addMile: function() {
    this.miles++;
  },

  start: function() {
    this.on = true;
  }
};

var snow = {
  
};
