function Vehicle(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}


Vehicle.prototype.start = function() {
  console.log(this.make + " " + this.model + " is starting...")
}



var car1 = new Vehicle("Toyota", "Corolla", 2020)
var car2 = new Vehicle("BMW", "M4", 2014)

car1.start()
