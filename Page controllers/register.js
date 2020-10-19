const loginPageRouter = require('express').Router()
const options = require('../utils/options').optionsForSendingBuildInPages

loginPageRouter.get('/', (request, response) => {
    response.sendFile('/index.html', options)
})

module.exports = loginPageRouter