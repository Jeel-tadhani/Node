// schema ---> architecture/structure of a document

const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number
},{versionKey: false}) 


const User = mongoose.model("user",userSchema)

module.exports = User

