const express = require('express')
const router = express.Router()
const { Survey, Question } = require('../db/schema')

module.exports = router