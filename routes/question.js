const express = require('express')
const router = express.Router( {mergeParams:true} )
const { Survey, Question } = require('../db/schema')

//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req,res) => {
    Survey.findById(req.params.surveyId)
    Question.findById(req.params.id)
    .then((survey)=>{
        res.render('questions/edit', {
            surveyId: req.params.surveyId,
            question: Question.id(req.params.id)
        })
    })
})

module.exports = router