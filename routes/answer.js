const express = require('express')
const router = express.Router( {mergeParams: true} )
const { Survey, Question, Answer } = require('../db/schema')

//RENDER NEW FORM
//˅˅This block coded with lots of assistance from Andrew Batung˅˅
router.get('/new', (req,res) =>{
    Survey.findById(req.params.surveyId)
    .then((survey) => {
        const quest = survey.questions.id(req.params.questionId)
        res.render('answers/new',{
            surveyId: req.params.surveyId,
            questionId: req.params.questionId
        })
    })
})

//CREATE
router.post('/', (req,res) => {
    //˅˅This block coded by Andrew Batung˅˅
    const answers = req.body.value.map(value => {
        const answer = new Answer({ value })
        return answer
    }) //^^This block coded by Andrew Batung^^
    Survey.findById(req.params.surveyId)
    .then((survey) =>{
        //Line directly below coded Andrew Batung˅˅
        survey.questions.id(req.params.questionId).answers = answers
        return survey.save()
    })
    .then(()=>{
        res.redirect(`/surveys`)
    })
})

module.exports = router