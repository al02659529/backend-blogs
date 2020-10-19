const logoutPageRouter = require('express').Router()
const options = require('../utils/options').optionsForSendingBuildInPages

logoutPageRouter.get('/', (request, response) => {
    response.sendFile('/index.html', options)
})

module.exports = logoutPageRouter