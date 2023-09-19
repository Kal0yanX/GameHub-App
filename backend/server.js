const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const userRoutes = require('./controllers/user')
const authentication = require('./controllers/authentication')
const userScore = require('./controllers/score')

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/user', userRoutes)
app.use('/authentication', authentication)
app.use('/userscore', userScore)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`listening on port ${PORT}`))

module.exports = app