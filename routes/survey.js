const express = require('express')
const router = express.Router( {mergeParams: true} )
const { Survey, Question, Answer } = require('../db/schema')

//INDEX, SHOW ALL
router.get('/', (req,res) => {
    Survey.find()
    .then((surveys)=>{
        res.render('surveys/index', {surveys})
    })
})

//NEW, RENDER NEW FORM
router.get('/new', (req,res) => {
    res.render('surveys/new')
})
//SHOW, SHOW ONE
router.get('/:surveyId', (req,res) => {
    Survey.findById(req.params.surveyId)
    .then((survey) => {
        const questions = survey.questions
        const answers = survey.questions.answers
        res.render('surveys/show', {survey, questions, answers})
    })
})

//EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req,res) => {
    Survey.findById(req.params.id)
    .then((survey) => {
        const questions = survey.questions
        const answers = survey.questions.answers
        res.render('surveys/edit', {survey, questions, answers})
    })
})

//CREATE
router.post('/', (req,res) => {
    Survey.create(req.body)
    .then((survey) => {
        res.redirect(`surveys/${survey._id}`)
    })
})

//UPDATE
router.put('/:id/', (req, res) => {
    Survey.findByIdAndUpdate(req.params.id, req.body)
    .then((survey) => {
        res.redirect(`/surveys/${survey._id}/`)
    })
})

//DELETE
router.delete('/:id', (req, res) => {
    Survey.findByIdAndRemove(req.params.id)
    .then(() => {
        res.redirect('/surveys')
    })
})

module.exports = router