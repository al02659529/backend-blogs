const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) =>{
    const body = request.body
    if ((!body.username || !body.password) || !body.name){
        return response.status(400).json({error: "username, name or password is missing"}).end();
    }
    const usernamePattern = /^[a-zA-Z0-9_-]{3,15}$/;
    const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    /*
    username: 3-15 characters (numbers or letters), only - _ as special characters allowed
    Password: Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
     */
    const validateUserName = usernamePattern.test(body.username)
    const validatePassword = passwordPattern.test(body.password)

    if (!validateUserName){
        return response.status(400).json({error: "Username must be between 3-15 characters (numbers or letters) and only - and _ as special characters are allowed"}).end()
    }
    if(!validatePassword){
       return response.status(400).json({error: "Password must contain a minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"}).end();
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash
    })
    try {
        const savedUser = await user.save()
        return response.status(201).json(savedUser)
    }
    catch (exception){
        return response.status(400).json({error: exception.message})
    }

})

usersRouter.get('/', async (request, response) =>{
    const users = await User.find({}).populate('blogs')
    await response.json(users)
})

module.exports = usersRouter