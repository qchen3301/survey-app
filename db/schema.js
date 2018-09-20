const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema ({
  value: String,
  count: Number
})

const QuestionSchema = new Schema({
  Query: String, 
  answers: [AnswersSchema]
})

const SurveySchema = new Schema({
  title: String, 
  author: String, 
  questions: [QuestionsSchema]
})

const AnswerModel = mongoose.model('Answer', AnswerSchema)
const QuestionModel = mongoose.model('Question', QuestionSchema)
const SurveySchema = mongoose.model('Survey', SurveySchema)

module.exports = {
  Answers: AnswersSchema,
  Questions: QuestionsSchema,
  Survey: SurveySchema
}