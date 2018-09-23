const express = require('express')
const router = express.Router( {mergeParams:true} )
const { Survey, Question } = require('../db/schema')

//SHOW ONE
router.get('/:id', (req,res) => {
    Survey.findById(req.params.surveyId)
    .then((survey) =>{
        res.render('questions/show', {
            surveyId: req.params.surveyId,
            questions: survey.question.id(req.params.id)
        })
    })
})
//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req,res) => {
    Survey.findById(req.params.surveyId)
    .then((survey)=>{
        res.render('questions/edit', {
            surveyId: req.params.surveyId,
            question: survey.question.id(req.params.id)
        })
    })
})

module.exports = router