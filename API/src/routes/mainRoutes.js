const express = require('express')
const Router = express.Router()
const mainController = require('../controllers/mainController')

// Main routes
Router.get('/', mainController.index)

Router.get('/api', mainController.api)

module.exports = Router