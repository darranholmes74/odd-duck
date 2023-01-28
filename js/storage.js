'use strict'

function getProducts(){
    let stringData = localStorage.getItem('products');
    console.log('string Data', stringData);
    return JSON.parse(stringData);
}

function saveProducts(){
    let pData = JSON.stringify(state);
    localStorage.setItem('products', pData)
    console.log('Products Saved!', localStorage);
}

function deleteProducts() {
    localStorage.clear();
}