const express = require('express')
const router = express.Router()
const transactionsController = require('../controllers/transactionsController')

// Main routes
router.get('/', transactionsController.index)

router.get('/list', transactionsController.list)

router.get('/create', transactionsController.create)


module.exports = router