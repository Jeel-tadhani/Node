const express = require('express');
const { getAllUsers, createUser, getUserBtEmail, getUserByAge} = require('../controllers/userControllers');

const router = express.Router();

router.route('/all')
.get(getAllUsers)

router.route('/')
.post(createUser)

router.get('/:email', getUserBtEmail)
router.get('/', getUserByAge)


module.exports = router;