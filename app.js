// Globals
var allProducts = [];

var bag = new Product('bag', 'imgs/bag.jpg');
var banana = new Product('banana', 'imgs/banana.jpg');
var bathroom = new Product('bathroom', 'imgs/bathroom.jpg');
var boots = new Product('boots', 'imgs/boots.jpg');
var breakfast = new Product('breakfast', 'imgs/breakfast.jpg');
var bubblegum = new Product('bubblegum', 'imgs/bubblegum.jpg');
var chair = new Product('chair', 'imgs/chair.jpg');
var cthulu = new Product('cthulhu', 'imgs/cthulhu.jpg');
var dogduck = new Product('dog-duck', 'imgs/dog-duck.jpg');
var dragon = new Product('dragon', 'imgs/dragon.jpg');
var pen = new Product('pen', 'imgs/pen.jpg');
var petsweep = new Product('pet-sweep', 'imgs/pet-sweep.jpg');
var scissors = new Product('scissors', 'imgs/scissors.jpg');
var shark = new Product('shark', 'imgs/shark.jpg');
var sweep = new Product('sweep', 'imgs/sweep.png');
var tauntaun = new Product('tauntaun', 'imgs/tauntaun.jpg');
var unicorn = new Product('unicorn', 'imgs/unicorn.jpg');
var usb = new Product('usb', 'imgs/usb.gif');
var watercan = new Product('water-can', 'imgs/water-can.jpg');
var wineglass = new Product('wine-glass', 'imgs/wine-glass.jpg');
// Constructor
function Product(productName, path) {
  this.productName = productName;
  this.path = path;
  this.timesShown = 0;
  this.timesClicked = 0;
  allProducts.push(this);
};
// Functions

function getIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function pictureSurvey() {
  var index = getIndex(allProducts);
  var obj = allProducts[index];
  var index2 = getIndex(allProducts);
  var obj2 = allProducts[index2];
  while (index === index2) {
    var index2 = getIndex(allProducts);
    var obj2 = allProducts[index2];
  }
  var index3 = getIndex(allProducts);
  var obj3 = allProducts[index3];
  while (index === index3 || index2 === index3 || index === index2) {
    var index3 = getIndex(allProducts);
    var obj3 = allProducts[index3];
  }
  document.image1.src = obj.path;
  document.image2.src = obj2.path;
  document.image3.src = obj3.path;
};

pictureSurvey();
