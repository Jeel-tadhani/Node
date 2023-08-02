const express = require('express')

const router = express.Router();

router.get('/', (req ,res) =>{
    res.send("user list")
})

router.get('/all', (req ,res) =>{
    res.send("All user list")
})

module.exports = router