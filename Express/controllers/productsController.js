const { getProductData, addProductsInData, removeProductInData, updateProductsInData, updateProductsInDataPut } = require("../models/productsModel")


const getAllProducts = (req,res)=>{
    const productList=getProductData()
    res.send(productList)

}

const createProduct = (req,res)=>{
    // product.push(req.body)
    // res.send(product)
    const status=addProductsInData(req.body);
    if(status){
        res.send('product created successfully!!')
    }else{
        res.send('something went wrong')
    }
}

const updateProduct = (req, res) =>{
    // const i = product.findIndex((item) => item.id === Number(req.params.id));
    // if(i !== -1){
    //     product[i]= {...product[i],...req.body}
    //     res.send(product)
    // }else{
    //     res.send(`product id not found : ${req.params.id}`)
    // }
    const status = updateProductsInData(req.params.id, req.body)
    status?res.send("product updated successfully!!"):res.send('failed to update product')
}

const updateProductPut = (req, res) => {
    const status = updateProductsInDataPut(req.params.id, req.body)
    status?res.send('product updated successfully by PUT method'):res.send('failed to update product by PUT method')
}

const deleteProduct = (req, res)=>{
    // const i = product.findIndex((item) => item.id === Number(req.params.id));
    // if(i !== -1){
    //     product.splice(i, 1);
    //     res.send(product)
    // }else{
    //     res.send(`product id not found : ${req.params.id}`)
    // }

    const status = removeProductInData(req.params.id);
    if(status){
        res.send('product deleted successfully!!')
    }else{
        res.send('something went wrong')
    }
}
module.exports = {getAllProducts, 
                  createProduct, 
                  updateProduct,
                  deleteProduct,
                  updateProductPut
                }