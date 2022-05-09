const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

// Main routes
router.get('/', mainController.index)

router.get('/api', mainController.api)

module.exports = router