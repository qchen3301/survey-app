const express = require('express')
const router = express.Router()
const { Survey } = require('../db/schema')

//INDEX, SHOW ALL
router.get('/', (req,res) => {
    Survey.find()
    .then((surveys)=>{
        res.render('surveys/index', {surveys})
    })
})

//NEW, RENDER NEW FORM

//SHOW, SHOW ONE

//EDIT, RENDER EDIT FORM

//CREATE

//UPDATE

//DELETE

module.exports = router
