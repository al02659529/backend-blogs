const blogsRouter = require('express').Router()
const Blog = require('../models/blogs');
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const middleware = require('../utils/middleware')


blogsRouter.get('/',  async (request, response) =>{
    const blogs = await Blog.find({})
    await response.json(blogs).end()
} )

blogsRouter.post('/', async (request, response, next) =>{
    const body = request.body
    const tokenRequest = request.token
    // const token = middleware.tokenExtractor(tokenRequest)
    // console.log("token = ", token)
    if (!tokenRequest){
        return response.status(401).json({error: 'missing token'})
    }
    const decodedToken = jwt.verify(tokenRequest, process.env.SECRET)
    if (!decodedToken.id){
        return response.status(401).json({error: 'invalid token'})
    }

    // console.log(decodedToken)
    const user = await User.findById(decodedToken.id)
    // const user = await User.find({})
    if (!body.title || !body.url){
        return response.status(400).json({error: "url and title are required"})
    }
    const blog = new Blog({
        title: body.title,
        author: body.author || null,
        url: body.url,
        likes: body.likes || 0,
        user: user._id || null
    })
    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    response.status(201).json(savedBlog)

})

blogsRouter.get('/:id', async (req, response) =>{
    const blogs = await Blog.find({})
    const id = req.params.id
    const blog = blogs.filter(blog => blog.id === id)
    await response.status(200).json(blog).end()
})

blogsRouter.delete('/:id', async (req, response) =>{
    const id = req.params.id
    const blog = await Blog.findById(id)
    const userId = blog.user
    const decodedToken = await jwt.verify(req.token, process.env.SECRET)
    const tokenUserId = decodedToken.id
    console.log("finded = ", decodedToken, userId, "finished")
    if (!userId || !tokenUserId){
        return response.status(401).json({error: 'invalid token or user'})
    }
   if (userId.toString() === tokenUserId.toString()){
       const res = await Blog.findByIdAndRemove(id)
       return response.status(204).end()
   }

   response.status(401).json({error: 'you have no permissions to delete this blog'})

})

blogsRouter.patch('/:id', async (req, response) =>{
    const id = req.params.id

    const modified = req.body

    const newBlog = await Blog.findByIdAndUpdate(id, modified, {new: true})


    response.status(202).json(newBlog).end()
})



module.exports = blogsRouter