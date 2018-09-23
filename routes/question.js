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
        res.send("Its German for the bart the")
    })
})

module.exports = router