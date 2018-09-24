const express = require('express')
const router = express.Router( {mergeParams:true} )
const { Survey, Question } = require('../db/schema')

//INDEX, SHOW ALL
router.get('/', (req,res) =>{
    Survey.findById(req.params.surveyId)
    .then((user)=> {
        res.render('questions/index', {
            surveyID: req.params.surveyId,
            questions: survey.question
        })
    })
})

//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req,res) => {
    Survey.findById(req.params.surveyId)
    .then((survey)=>{
        res.render('questions/edit', {
            surveyId: req.params.surveyId,
            question: survey.questions.id(req.params.id)
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
        res.redirect(`/surveys/${req.params.surveyId}/`)
    })
})

module.exports = router