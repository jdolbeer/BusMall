function Dog(name, breed, bark) {
  this.name = name;
  this.breed = breed;
  this.bark = bark;
  this.legs = 4;
  this.isAGoodDog = true;
}
var Parker = new Dog('Parker', 'English Shepherd', 'woof');
var Demi = new Dog('Demi', 'Border Collie');
Dog.prototype.says = function() {
  console.log(this.bark);
};
