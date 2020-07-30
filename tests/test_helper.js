const Blog = require('../models/blogs')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const axios = require('axios')

const initialUsers = [

    {
        username: "root",
        name: "Ricky rickon",
        password: "Sekret123!"
    },
    {
        name: "Mikkel",
        username: "mluukkai",
        password: "Sekret123!"
    }
]
const initialBlogsforRoot = [
    {
        title: "Modern HTML Explained For Dinosaurs",
        author: "Peter Jang",
        url: "https://medium.com/actualize-network/modern-html-explained-for-dinosaurs-65e56af2981",
        likes: 813
    },
    {
        title: "Modern CSS Explained For Dinosaurs",
        author: "Peter Jang",
        url: "https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525",
        likes: 25000
    }
]

initialBlogsforMikkael = [
    {
        title: "Modern JavaScript Explained For Dumbs",
        author: "Peter Jang",
        url: "https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70",
        likes: 69000
    },
    {
        title: "Live-debugging Node.js apps at the command line",
        author: "ApostropheCMS",
        url: "https://medium.com/the-node-js-collection/live-debugging-node-js-apps-at-the-command-line-cd5b58f883e1",
        likes: 242
    }
]

const notesInDb = async () =>{
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () =>{
    const users =  await User.find({})
    return users.map(user => user.toJSON())
}
const rootLogIn = async () =>{
    const response = await axios.get('/api/login/')
}
module.exports = {
    initialBlogsforRoot, initialBlogsforMikkael, notesInDb, usersInDb, initialUsers
}