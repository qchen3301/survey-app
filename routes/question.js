const express = require('express')
const router = express.Router( {mergeParams:true} )
const { Survey, Question } = require('../db/schema')

//RENDER NEW FORM - troubleshooted by Andrew Batung
router.get('/new', (req,res) => {
    res.render('questions/new', {surveyId: req.params.surveyId} )
})

//CREATE
router.post('/', (req,res) => {
    const newQuestion = new Question(req.body)
    Survey.findById(req.params.surveyId)
    .then((survey) =>{
        survey.questions.push(newQuestion)
        return survey.save()
    })
    .then((survey)=>{
        //˅˅this block coded by Andrew Batung˅˅
        const query = req.body.query
        const questions = survey.questions
        const question = questions.find(question => question.query === query)
        console.log(question)
        res.redirect(`/surveys/${req.params.surveyId}/questions/${question._id}/answers/new`)
        //^^this block coded by Andrew Batung^^
    })
})

module.exports = router