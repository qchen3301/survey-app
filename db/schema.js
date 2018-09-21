const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema ({
  value: String,
  count: Number
})

const QuestionSchema = new Schema({
  Query: String, 
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
  Answers: AnswerSchema,
  Questions: QuestionSchema,
  Survey: SurveySchema
}