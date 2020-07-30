const logger = require('./logger')
const morgan = require('morgan')

morgan.token('token', function (req, res) { return req.headers['Authorization'] })

const token = (request, response, next) =>{
    request.token = request.get('authorization')
    const token = request.token
    if (token && token.toLowerCase().startsWith('bearer ')){
        request.token = token.substring(7)
    }
    next()
}

const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
    next()
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    } else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
            error: 'invalid token'
        })
    }



    next(error)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
    token
}