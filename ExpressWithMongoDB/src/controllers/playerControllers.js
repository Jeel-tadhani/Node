const Player = require("../models/PlayerModel");



const createMultiplePlayers = (req , res) => {
    // ?this will create multiple players in one go 
    // take array as body 
    Player.insertMany(req.body)
    .then((data)=>{
      console.log("player data ::",data);
      res.send("Players created successfully")
    })
  
  }
  
// //   > : {$gt:50}, >= : {$gte:50}, < : {$lt:50}, <= : {$lte:50}
  // const getPlayers = (req , res) =>{
//     Player.find({score : {$gte:50}})
//     .then((player) => {
//       res.send(player)
//     })
//   }

// 50||40 {$in : [50 , 40]}
// not in = $nin 
// not en = {$ne : 50}
    // const getPlayers = (req , res) =>{
    //   Player.find({score : {$ne :50}})
    //   .then((player) => {
    //     res.send(player)
    //   })
    // }

    // logical operators --->  AND, OR, NOR, NOT
    // const getPlayers = (req , res) =>{
    //   Player.find({$nor :[{team:"Australia"}, {score:50}]})
    //   .then((player) => {
    //     res.send(player)
    //   })
    // }

    // 
    const getPlayers = (req , res) =>{
      // Player.find({team: {$regex: "Australia|NZ|india"}})
      // .then((player) => {
      //   res.send(player)
      // })


        // Player.find({team: {$regex: "Australia|Nz|India",$options: 'i'}})
        // .then((player) => {
        //   res.send(player)
        // })

      // Player.find({team: {$regex: /tra/}})
      // .then((player) => {
      //   res.send(player)
      // })

      // start with end with i$
      // Player.find({team: {$regex: /^i/}})
      // .then((player) => {
      //   res.send(player)
      // })
      Player.find({name: {$regex: /sharma$/, $options:"i"}})
      .then((player) => {
        res.send(player)
      })

    }

    const updatePlayer = (req, res) => {
      // res.send(req.params.id)
      // Player.findByIdAndUpdate(req.params.id,{$set: req.body})
      // .then((data)=>{
      //   res.send(data)
      // })

      Player.updateOne({name:"Arron finch"}, req.body)
      .then((info)=>{
        console.log(info);
        res.send("updated successfully")
      })

    }
  
  module.exports = {createMultiplePlayers, 
                    getPlayers,
                    updatePlayer}