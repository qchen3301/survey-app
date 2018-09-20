const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultsSchema = new Schema ({
  value: String,
  count: Number
})

const QuestionsSchema = new Schema({
  Query: String,
  results: [ResultsSchema]
})

const SurveySchema = new Schema({
  name: String,
  author: String,
  questions: [QuestionsSchema]
})

module.exports = {
  Results = ResultsSchema,
  Options = OptionsSchema,
  Survey = SurveySchema
}