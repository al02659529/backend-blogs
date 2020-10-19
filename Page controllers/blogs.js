const blogsPageRouter = require('express').Router()
const options = require('../utils/options').optionsForSendingBuildInPages



blogsPageRouter.get('/', (request, response) => {
    response.sendFile('/index.html', options)
})

blogsPageRouter.get('/new', (request, response) => {
    response.sendFile('/index.html', options)
})


module.exports = blogsPageRouter