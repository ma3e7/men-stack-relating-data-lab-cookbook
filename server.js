const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const session = require('express-session')

const authenticationController = require('./controllers/authenticationController.js')

const port = process.env.PORT ? process.env.PORT : '3000'

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Conected to: ${ mongoose.connection.name }`)
})

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(morgan('dev'))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))


app.get('/', (req, res) => {
   res.render('indexView.ejs')
})

app.use('/', authenticationController);

app.listen(port, () => {
    console.log(`The express app is ready on port ${port}!`)
}) 