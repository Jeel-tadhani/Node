const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/NSUrsa")
.then(() => {
    console.log("database connection successfull");
})
.catch((err) => {
    console.log(`Error is : ${err.message}`);
})

