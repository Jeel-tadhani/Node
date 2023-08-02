const express = require('express');
const { checkLogInStatus, checkUser } = require('./middleware');
const app = express();

const dotEnv = require('dotenv');
const ProductRouter = require('./routes/productsRoute');
const UserRouter = require('./routes/userRoute');
dotEnv.config();

// app.use(checkUser)
// app.use(checkLogInStatus);
app.use('/products', ProductRouter)
app.use('/user', UserRouter)

// app.get('/products',(req,res)=>{
//     res.send('product page -- GET');
// })
// app.post('/products',(req,res)=>{
//     res.send('product page  -- POST');
// })
// app.patch('/products',(req,res)=>{
//     res.send('product page -- PATCH');
// })

// using Route
// app.route('/products')
// .get((req,res)=>{
//     res.send('product page -- GET'); 
// })
// .post((req,res)=>{
//     res.send('product page  -- POST');
// })
// .patch((req,res)=>{
//     res.send('product page -- PATCH');
// })

// app.route('/user/:id')
// .get((req,res)=>{
//     res.send('user page -- GET'); 
// })
// .post((req,res)=>{
//     res.send('user page  -- POST');
// })
// .patch((req,res)=>{
//     res.send('user page -- PATCH');
// })



app.get('/orders',checkLogInStatus,(req,res)=>{
    res.send('order page');
})

app.get('/profile',checkLogInStatus,(req,res)=>{
    res.send('profile page');
})




const PORT = process.env.PORT || 5500
app.listen(PORT,()=>{
    console.log('server listening on port :', PORT);
    // console.log(process);
})