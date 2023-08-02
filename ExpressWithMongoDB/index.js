const express = require('express')
const env = require('dotenv');
env.config();
const userRouter = require('./src/routes/userRoutes');
const playerRouter = require('./src/routes/playerRoutes')

const app = express();
app.use(express.json())


require('./connectDb')
app.use('/user',userRouter)
app.use('/player',playerRouter)

const PORT = process.env.PORT||5500;
app.listen(PORT, ()=>{
    console.log("Express listening at port :",PORT)
}) 