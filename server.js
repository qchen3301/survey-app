require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const logger = require('morgan')
const hbs = require('hbs')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

const indexRouter = require('./routes')
const surveyRouter = require('./routes/survey')
const questionRouter = require('./routes/question')
const answerRouter = require('./routes/answer') 

var app = express()

//view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'public')))

//app.use routers
app.use('/', indexRouter)
app.use('/surveys', surveyRouter)
app.use('/surveys/:surveyId/questions', questionRouter)
app.use('/surveys/:surveyId/questions/:questionId/answer', answerRouter)

//catch 404 and fwd to error handler
app.use( (req, res, next) => {
  next(createError(404))
})

//error handler
app.use((err, req, res, next) => {
  //set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err: {}

  //render error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app