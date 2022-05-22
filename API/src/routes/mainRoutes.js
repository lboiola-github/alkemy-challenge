const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

// Main routes
router.get('/', mainController.index)

router.get('/api', mainController.api)

router.get('/api/create', mainController.create)

router.get('/api/user/:id', mainController.user)

router.get('/api/user/create', mainController.newUser)

module.exports = router