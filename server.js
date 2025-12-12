const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const session = require('express-session')
const path = require("path");

const foodsController = require('./controllers/foodsController.js');
const authenticationController = require('./controllers/authenticationController.js')

const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');

const port = process.env.PORT ? process.env.PORT : '3000'
app.use(express.static(path.join(__dirname, "public")))

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

app.use(passUserToView);
app.use('/auth', authenticationController);
app.use(isSignedIn);
app.use('/users/:userId/foods', foodsController);

app.listen(port, () => {
    console.log(`The express app is ready on port ${port}!`)
}) 