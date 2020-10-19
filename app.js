const config = require('./utils/config')
const express = require("express")
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const mongoose = require("mongoose")
const blogsRouter = require('./API controllers/blogs')
const usersRouter = require('./API controllers/users')
const loginRouter = require('./API controllers/login')
const blogsPageRouter = require('./Page controllers/blogs')
const loginPageRouter = require('./Page controllers/login')
const registerPageRouter = require('./Page controllers/register')
const logoutPageRouter = require('./Page controllers/logout')


logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {    console.log('connected to MongoDB')  })
    .catch((error) => {    console.log('error connecting to MongoDB:', error.message)  })

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.token);
app.use(express.static('build'))

app.use('/blogs', blogsPageRouter)
app.use('/login', loginPageRouter)
app.use('/logout', logoutPageRouter)
app.use('/register', registerPageRouter)
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app