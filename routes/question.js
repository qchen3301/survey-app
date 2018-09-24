const express = require('express')
const router = express.Router( {mergeParams:true} )
const { Survey, Question } = require('../db/schema')


//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req,res) => {
    Survey.findById(req.params.surveyId)
    .then((survey)=>{
        res.render('questions/edit', {
            surveyId: req.params.surveyId,
            question: survey.questions.id(req.params.id),
            answers: survey.questions.id(req.params.id).answers
        })
    })
})


//UPDATE
router.put('/:id/', (req, res) => {
    Survey.findByIdAndUpdate(req.params.surveyId)
    .then((survey) => {
        survey.questions.id(req.params.id).set(req.body)
        return survey.save()
    })
    .then(()=>{
        res.redirect(`back`)
    })
})

module.exports = router