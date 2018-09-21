require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

const Schema = require('./schema')

const { Survey, Question, Answer } = Schema

const dogeAnswerA = new Answer({value: "Doge", count: 0})
const dogeAnswerB = new Answer({value: "L O N G B O I", count: 0})
const dogeAnswerC = new Answer({value: "Trash Panda", count: 0})

const stingrayAnswerA = new Answer({value: "Fringe Weaver", count: 0})
const stingrayAnswerB = new Answer({value: "Moonblast", count: 0})
const stingrayAnswerC = new Answer({value: "Blue Fairy", count: 0})
const stingrayAnswerD = new Answer({value: "Beer", count: 0})
const stingrayAnswerE = new Answer({value: "Zen Star", count: 0})

const barkleyAnswerA = new Answer({value:"Time to slam!", count: 0})
const barkleyAnswerB = new Answer({value:"Time to jam!", count: 0})

const dogeQuestion = new Question({
    query: "Who Is The Best Good Boy?",
    answers: [dogeAnswerA, dogeAnswerB, dogeAnswerC]
})

const stingrayQuestion = new Question({
    query: "What is your favorite drink?",
    answers: [stingrayAnswerA, stingrayAnswerB, stingrayAnswerC, stingrayAnswerD, stingrayAnswerE]
})

const barkleyQuestion = new Question({
    query: "What time is it?",
    answers: [barkleyAnswerA, barkleyAnswerB]
})

const doge = new Survey({
    title: "Best Good Boys",
    author: "doge",
    questions: [dogeQuestion]
})

const stingray = new Survey({
    title: "Favorite Drinks",
    author: "Jill Stingray",
    questions: [stingrayQuestion]
})

const barkley = new Survey({
    title: "Strongest Jams",
    author: "Charles Barkley",
    questions: [barkleyQuestion]
})

Survey.deleteMany()
.then(()=>{
    return Survey.insertMany([doge, stingray, barkley])
})
.then(()=> {
    console.log('Done Seeding!')
    mongoose.connection.close()
})
