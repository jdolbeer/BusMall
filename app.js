var allProducts = [];
var bag = new Product('bag');
var banana = new Product('banana');
var bathroom = new Product('bathroom');
var boots = new Product('boots');
var breakfast = new Product('breakfast');
var bubblegum = new Product('bubblegum');
var chair = new Product('chair');
var cthulu = new Product('cthulu');
var dogduck = new Product('dog duck');
var dragon = new Product('dragon');
var pen = new Product('pen');
var petsweep = new Product('pet sweep');
var scissors = new Product('scissors');
var shark = new Product('shark');
var sweep = new Product('sweep');
var tauntaun = new Product('tauntaun');
var unicorn = new Product('unicorn');
var usb = new Product('usb');
var watercan = new Product('watercan');
var wineglass = new Product('wine glass');

function Product(productName, timesShown, timesClicked) {
  this.productName = productName;
  this.timesShown = 0;
  this.timesClicked = 0;
}
