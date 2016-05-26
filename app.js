// Globals
var allProducts = [];
var allClicks = 0;
var infoChart;
var clicksCounted = [];
var container = document.getElementById('container');
var firstImage = document.getElementById('image1');
var secondImage = document.getElementById('image2');
var thirdImage = document.getElementById('image3');
var allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'];
// Constructor
function Product(name) {
  this.name = name;
  this.path = 'imgs/' + name + '.jpg';
  this.timesShown = 0;
  this.timesClicked = 0;
};
for (var i = 0; i < allNames.length; i++)
  allProducts.push(new Product(allNames[i]));
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
  while (index === index3 || index2 === index3) {
    var index3 = getIndex(allProducts);
    var obj3 = allProducts[index3];
  }
  firstImage.src = obj.path;
  secondImage.src = obj2.path;
  thirdImage.src = obj3.path;
  firstImage.name = obj.name;
  secondImage.name = obj2.name;
  thirdImage.name = obj3.name;
  obj.timesShown += 1;
  obj2.timesShown += 1;
  obj3.timesShown += 1;
};

// Event Handler
function handleImageClick(event) {
  allClicks += 1;
  for (var i = 0; i < allProducts.length; i ++) {
    if (event.target.name === allProducts[i].name) {
      allProducts[i].timesClicked += 1;
    }
  }
  if (allClicks >= 25) {
    document.getElementById('results').style.visibility = 'visible';
    firstImage.removeEventListener('click', handleImageClick);
    secondImage.removeEventListener('click', handleImageClick);
    thirdImage.removeEventListener('click', handleImageClick);
    localStorage.setItem('allData', JSON.stringify(allProducts));
  }
  startpage();
}
// Chart Creation
var data = {
  labels: allNames,
  datasets: [
    {
      label: 'All Clicks for Products',
      backgroundColor:'rgb(243, 21, 21)',
      borderColor: 'rgb(25, 24, 19)',
      borderWidth: 2,
      hoverBackgroundColor: 'rgb(243, 231, 190)',
      data: clicksCounted,
    }]
};
function handleButtonClick(event) {
  for (var i = 0; i < allProducts.length; i++) {
    clicksCounted.push(allProducts[i].timesClicked);
  }
  document.getElementById('product-chart').style.visibility = 'visible';
  var ctx = document.getElementById('product-chart').getContext('2d');
  infoChart = new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      responsive: false
    }
  });
};
// Function Calls
function startpage () {
  if (localStorage.getItem('allData') === null) {
    pictureSurvey();
  } else {
    var storedProducts = JSON.parse(localStorage.getItem('allData'));
    for (var i = 0; i < allProducts.length; i ++) {
      allProducts[i] = storedProducts[i];
    }
    pictureSurvey();
  }
};
firstImage.addEventListener('click', handleImageClick);
secondImage.addEventListener('click', handleImageClick);
thirdImage.addEventListener('click', handleImageClick);
document.getElementById('product-chart').style.visibility = 'hidden';
document.getElementById('results').style.visibility = 'hidden';
document.getElementById('results').addEventListener('click', handleButtonClick);
startpage();
