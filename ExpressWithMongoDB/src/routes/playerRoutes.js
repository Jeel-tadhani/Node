const express = require('express');
const { createMultiplePlayers, getPlayers, updatePlayer } = require('../controllers/playerControllers');


const router = express.Router()





router.post('/',createMultiplePlayers)
router.get('/',getPlayers)

router.patch('/:id',updatePlayer)

module.exports = router;