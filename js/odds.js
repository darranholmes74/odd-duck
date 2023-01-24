'use strict';

const productimgEl = document.getElementById('product-image');
const products = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];
const allProductImg = [];
let rounds = 8;
let graph = null;
const canvEl = document.getElementById('graph');
const buttonEl = document.getElementById('reveal');
let newImgArray = [];


function ProductImg(name, url){
    this.name = name;
    this.url = `images/${url}`;
    this.clicks = 0;
    this.shown = 0;
}
 function randomProduct()  {
    return Math.floor(Math.random() * allProductImg.length);
}


function render(){
    let prodimg1 = document.getElementById('prodimg1')
    let prodimg2 = document.getElementById('prodimg2')
    let prodimg3 = document.getElementById('prodimg3')

    let img1 = randomProduct();
    let img2 = randomProduct();
    let img3 = randomProduct();

    while (img1 === img2){
        img2 = randomProduct();
    }
    while(img1 === img3){
        img3 = randomProduct();
    }
    while (img2 === img3){
        img3 = randomProduct();
    }


    let prod1 = allProductImg[img1];
    let prod2 = allProductImg[img2];
    let prod3 = allProductImg[img3];
    prodimg1.src = prod1.url;
    prodimg2.src = prod2.url;
    prodimg3.src = prod3.url;
    prodimg1.name = prod1.name;
    prodimg2.name = prod2.name;
    prodimg3.name = prod3.name;
    prod1.shown++;
    prod2.shown++;
    prod3.shown++;
}



// function reRender(){
//     let oldImg = allProductImg[render()];
//     if (oldImg === )
// }


function userClick(event){
   
    let productName = event.target.name;
    console.log(event.target);

    allProductImg.forEach(function (product){
        // console.log("this is product.name", product.name);
        // console.log("this is productName", productName);
        if (product.name === productName){
            product.clicks++;
            console.log(allProductImg);
        }
    });
    rounds--;
    if (!rounds){
        productimgEl.removeEventListener('click', userClick);
        buttonEl.style.display = 'inline';
    }

    render();
}

for (let i = 0; i < products.length; i++){
    let productimg = new ProductImg(products[i].slice(0, products[i].length -4), products[i]);
    allProductImg.push(productimg);
}



console.log(allProductImg);

function results(event){

let nameArray = [];
let clicksArray = [];
let shownArray = [];

for(let i = 0; i < allProductImg.length; i++){
    nameArray.push(allProductImg[i].name);
    clicksArray.push(allProductImg[i].clicks);
    shownArray.push(allProductImg[i].shown);
}



new Chart(canvEl, {
  type: 'bar',
  data: {
    labels: nameArray,
    datasets: [{
      label: '# of Votes',
      data: clicksArray,
      borderWidth: 1
    }, {
        label: '# of Views',
        data: shownArray,
        borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
}

render();

productimgEl.addEventListener('click', userClick);
buttonEl.addEventListener('click', results);

//create img click through array
//for loop through all img array
//access the img clicks property
//push to img clicked array

//same for shown