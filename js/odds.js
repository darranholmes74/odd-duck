'use strict';

const productimgEl = document.getElementById('product-image');
const products = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];
const allProductImg = [];



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

    while (img2 === img1){
        img2 = randomProduct();
    }

    while (img3 === img1){
        img3 = randomProduct();
    }
    while (img3 === img2) {
        img3 = randomProduct();
    }


    if(prodimg1 === img1 || prodimg1 === img2 || prodimg1 === img3){
        this.shown++
    }

    if(prodimg2 === img1 || prodimg2 === img2 || prodimg2 === img3){
        this.shown++
    }

    if(prodimg3 === img1 || prodimg3 === img2 || prodimg3 === img3){
        this.shown++
    }

    let prod1 = allProductImg[img1];
    let prod2 = allProductImg[img2];
    let prod3 = allProductImg[img3];
    prodimg1.src = prod1.url;
    prodimg2.src = prod2.url;
    prodimg3.src = prod3.url;
    prodimg1.name = prod1.url;
    prodimg2.name = prod2.url;
    prodimg3.name = prod3.url;
    
}





function userClick(event){
    let productName = event.target.name;

    allProductImg.forEach(function (product){
        if (product.name === productName){
            product.clicks++
        }
    });

    render();
}

for (let i = 0; i < products.length; i++){
    let productimg = new ProductImg(products[i].slice(0, products[i].length -4), products[i]);
    allProductImg.push(productimg);
}

render();

productimgEl.addEventListener('click', userClick);

console.log(allProductImg);

