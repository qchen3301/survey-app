const express = require('express')
const router = express.Router( {mergeParams: true} )
const { Survey, Question, Answer } = require('../db/schema')

//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req,res) => {
    Survey.findById(req.params.surveyId)
    Question.findById(req.params.questionId)
    .then((survey) => {
        res.render('answers/edit', {
            surveyId: req.params.surveyId,
            questionId: req.params.questionId,
            answers: survey.questions.answers.id(req.params.id)
        })
    })
})

router.put('/:id', (req, res) => {
    Survey.findByIdAndUpdate(req.params.surveyId, req.body)
    .then((survey) => {
        res.redirect(`back`)
    })
})

module.exports = router