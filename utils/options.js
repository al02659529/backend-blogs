const path = require('path')


const optionsForSendingBuildInPages = {
    root: path.join(__dirname, '../build'),
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
}



module.exports = { optionsForSendingBuildInPages }