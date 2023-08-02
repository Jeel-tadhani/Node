const User = require("../models/userModel");



const getAllUsers = (req,res)=>{
  User.find()
  .then((data)=>{
    res.send(data)
  })
  .catch((err) => {
    res.send("can't find users")
  })
  // res.send("User list")
}

const createUser = (req, res) => {

  // console.log(req.body);

  User.create(req.body)
  .then((data) => {
    console.log('data :',data);
    res.send(`User created successfully : ${data}`)
  })
  .catch((err)=>{
    console.log('error occured');
    res.send("failed to create user")
  })
}


const getUserBtEmail = (req, res) => {
  User.findOne({email:req.params.email})
  .then((data)=>{
    res.send(data);
  })
  .catch((err) => {
    res.send("failed to getUserBtEmail")
  })
  // res.send("anithing")
}

const getUserByAge = (req, res) => {
  console.log(req.query)
  // User.find({age : req.query.age})
  // User.find(req.query)
  // .then((data)=> {
  //   res.send(data);
  // })


  // User.find({age : req.query.age}).select('username email')
  // .then((data)=> {
  //   res.send(data);
  // })

  // User.find({age : req.query.age}).select({username:1, email:1})
  // .then((data)=> {
  //   res.send(data);
  // })

// User.find({age : req.query.age}).select({username:0,password:0})
//   .then((data)=> {
//     res.send(data);
//   })

//limit give limit of user we want to get 
// Arithmatic operators 
    // User.find()
}


module.exports = {getAllUsers, 
                  createUser, 
                  getUserBtEmail, 
                  getUserByAge}