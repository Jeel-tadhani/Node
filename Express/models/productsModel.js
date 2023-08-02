const fs = require('fs');

const  readAndParseDataFromFile = () => {
    const data = fs.readFileSync('./Express/data/products.json');
    // convert to js obj to operate
    const products = JSON.parse(data);
    return products;
}
const updateDataInFile = (data) =>{
    try{
    fs.writeFileSync('./Express/data/products.json',JSON.stringify(data,"", 3))
    return true;
    }catch(e){
        console.log('error :',e);
        return false;
    }
}
 
const getProductData = () => {
    const {productList} = readAndParseDataFromFile();
    return productList;
}

const addProductsInData = (product) => {
    const productObj = readAndParseDataFromFile();

    // const updatedProductList = [...productObj.productList, product]
    // productObj.productList = updatedProductList;
    
    productObj.productList.push(product)
    // update data in file
    return updateDataInFile(productObj) 
}

const updateProductsInData = (id , product) => {
    const productObj = readAndParseDataFromFile();
    const i = productObj.productList.findIndex((item)=> item.id === Number(id))
    if(i !== -1){
        productObj.productList[i]= {...productObj.productList[i],...product};
        return updateDataInFile(productObj)
    }
    
}

const updateProductsInDataPut = (id, product) => {
    const productObj = readAndParseDataFromFile();
    const i = productObj.productList.findIndex((item)=> item.id === Number(id))
    if(i !== -1){
        productObj.productList[i]=product;
        return updateDataInFile(productObj)
    }
    
}

const removeProductInData = (id) =>{
    const productObj = readAndParseDataFromFile();
    const {productList}=  productObj;
    const i =productList.findIndex((item)=> item.id === id)
    productObj.productList.splice(i, 1);

    return updateDataInFile(productObj);
}


module.exports = {getProductData, addProductsInData, removeProductInData, updateProductsInData, updateProductsInDataPut}