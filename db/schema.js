const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnswerSchema = new Schema ({
  value: String,
  count: Number
})

const QuestionSchema = new Schema({
  query: String, 
  answers: [AnswerSchema]
})

const SurveySchema = new Schema({
  title: String, 
  author: String, 
  questions: [QuestionSchema]
})

const AnswerModel = mongoose.model('Answer', AnswerSchema)
const QuestionModel = mongoose.model('Question', QuestionSchema)
const SurveyModel = mongoose.model('Survey', SurveySchema)

module.exports = {
  Answer: AnswerModel,
  Question: QuestionModel,
  Survey: SurveyModel
}