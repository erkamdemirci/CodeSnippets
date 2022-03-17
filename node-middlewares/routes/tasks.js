const express = require('express')
const router = express.Router()

const { getData } = require('../controllers/tasks')

router.route('/:url').get(getData)

module.exports = router
