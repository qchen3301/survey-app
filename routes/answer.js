const express = require('express')
const router = express.Router()
const { Survey, Question, Answer } = require('../db/schema')

module.exports = router