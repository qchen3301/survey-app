const express = require('express')
const router = express.Router( {mergeParams:true} )
const { Survey, Question } = require('../db/schema')

//EDIT, RENDER EDIT FORM
router.get('/:id', (req,res) => {
    Question.findById(req.params.id)
    .then((query) => {
        res.render('questions/edit', {query} )
    })
})


//CREATE
/*router.post('/', (req, res) => {
    const newQuestion = new Question(req.body)
    User.findById(req.params.surveyId)
    .then((survey) => {
        survey.questions.push(newQuestion)
        return survey.save()
    })
    .then((survey) => {
        res.redirect(`/surveys/${req.params.surveyId}/questions`)
    })
})*/

module.exports = router