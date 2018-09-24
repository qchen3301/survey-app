const express = require('express')
const router = express.Router( {mergeParams: true} )
const { Survey, Question, Answer } = require('../db/schema')

//EDIT, RENDER EDIT FORM
router.get('/edit', (req,res) => {
    Survey.findById(req.params.surveyId)
    .then((survey) => {
        const quest = survey.questions.id(req.params.questionId)
        res.render('answers/edit', {
            quest, 
            uGotServed: req.params.surveyId,
            uGotQuest: req.params.questionId
        })
    })
})


//DELETE
router.delete('/deleteAll', (req, res) => {
   Survey.findById(req.params.surveyId)
    .then((survey) => {
        const question = survey.questions.id(req.params.questionId)
        question.answers.remove()
        return survey.save()
    })
    .then(() => {
        res.redirect('surveys/index')
    })
})


module.exports = router