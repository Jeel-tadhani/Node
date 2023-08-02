const express = require('express');
const app = express();
console.log('this is index.js');

app.use(express.json())


const product = [
    {
        id:1,
        name:'iphone13',
        category:'mobile',
        price:50000,
        color:'white'
    },
    {
        id:2,
        name:'galaxy',
        category:'mobile',
        price:40000,
        color:'black'
    },
    {
        id:3,
        name:'fridge',
        category:'appliances',
        price:35000,
        color:'green'
    },
    {
        id:4,
        name:'cooler',
        category:'appliances',
        price:30000,
        color:'green'
    },
    
]
// get or  read 
app.get('/',(req, res)=>{
    res.send('sending... response')
})
app.get('/login',(req, res)=>{
    console.log('method :',req.method);
    console.log('url :',req.url);
    console.log('path :',req.path);
    // console.log('headers :',req.headers);
    console.log('query :',req.query);
    res.send('<h2>sending... response LOGIN PAGE<h2/>')
})
app.get('/data',(req, res)=>{
    res.send({name: 'jeel'})
})
app.get('/products',(req, res)=>{
    console.log('quary : ',req.query);

    const {category,price}= req.query;
    if(category && price){
        const item = product.filter((item)=> item.category === category&&item.price === +price);
        res.send(item)
    }else if(category){
        const item = product.filter((item)=> item.category === category);
        res.send(item)
    }else if(price){
        const item = product.filter((item)=> item.price === Number(price));
        res.send(item)
    }else{
        res.send(product)
    }
})
app.get('/products/:productId',(req, res)=>{
    console.log(req.params);
    // res.send(product[req.params.productId-1])

    const item =product.find((item,i)=>item.id === Number(req.params.productId))
    if(item){
        res.send(item);
    } else{
        res.send({});    
    }
})

app.get('*',(req, res)=>{
    res.send('sending... response if any page is not found !!!!')
})

//post or create

app.post('/', (req, res) => {
    console.log('post request success!!');
    res.send("<h1>responce from POST<h1/>")
})
app.post('/products',(req,res)=>{
    console.log("data in body :" ,req.body);
    product.push(req.body)
    res.send(product)
})

//put or patch or update

app.put('/products/:productId',(req,res)=>{
    console.log(req.body );
    product.forEach((item,i) => {
        if(item.id === Number(req.params.productId)){
            product[i] = req.body;
        }
    }); 

    // or 
    // const i =product.findIndex((item,i)=>item.id === Number(req.params.productId))
    // product[i]= req.body;

    res.send(product)
})

app.patch('/products/:id',(req,res)=>{
    console.log(req.body);
    const i = product.findIndex((item,i)=>item.id === Number(req.params.id))
    product[i]= {...product[i],...req.body}

    res.send(product)
})

// delete 

app.delete('/products/:id',(req,res)=>{
    
    const i = product.findIndex((item)=> item.id === Number(req.params.id))
    console.log(i);
    if(i > -1){
    product.splice(i,1);
    }
    res.send(product);
})



const PORT = 5000;
app.listen(PORT,()=>{
    console.log('express server running at port :',PORT);
})






