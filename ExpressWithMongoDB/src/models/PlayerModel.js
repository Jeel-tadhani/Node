const  mongoose = require('mongoose');

const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: String,
    score: Number,
    team : String
}, {versionKey:false})

const Player = mongoose.model("player", playerSchema)

module.exports = Player