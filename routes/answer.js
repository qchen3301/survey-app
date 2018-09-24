const express = require('express')
const router = express.Router( {mergeParams: true} )
const { Survey, Question, Answer } = require('../db/schema')

//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req,res) => {
    Survey.findById(req.params.id)
    .then((survey) => {
        const questions = survey.questions
        const answers = survey.question.answers
        res.render('answers/edit')
    })
})

module.exports = router