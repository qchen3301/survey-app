const express = require('express')
const router = express.Router( {mergeParams: true} )
const { Survey, Question, Answer } = require('../db/schema')

//EDIT, RENDER EDIT FORM
router.get('/edit', (req,res) => {
    Survey.findById(req.params.surveyId)
    .then((survey) => {
        const quest = survey.questions.id(req.params.questionId)
        console.log(quest)
        res.render('answers/edit', {quest})
    })
})

router.put('/:id', (req, res) => {
    Survey.findByIdAndUpdate(req.params.surveyId, req.body)
    .then((survey) => {

        res.redirect(`back`)
    })
})



module.exports = router