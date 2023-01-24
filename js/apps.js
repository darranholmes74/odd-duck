'use strict'
const productimgEl = document.getElementById('product-imgae');
const products = ['bag.jpg', '', '', '', '', '', '', '', ''];
const allProductImg = [];

function ProductImg(name, url){
    this.name = name;
    this.url = `assests/images/${url}`;
    this.clicks = 0;
    this.shown = 0;
}

function randomProduct(){
    return Math.floor(Math.random() * allProductImg.length);
}

function render(){
    let prodimg1 = document.getElementById('prodimg1')
    let prodimg2 = document.getElementById('prodimg2')
    let prodimg3 = document.getElementById('prodimg3')

    let img1 = randomProduct();
    let img2 = randomProduct();
    let img3 = randomProduct();

    while (img2 === img1 || img3 === img1){
        img2 = randomProduct();
        img3 = randomProduct();

       
    }
    prodimg1.src = prod1.url;
    prodimg2.src = prod2.url;
    prodimg3.src = prod3.url;
    prodimg1.name = prod1.url;
    prodimg2.name = prod2.url;
    prodimg3.name = prod3.url;
    
}

render();

