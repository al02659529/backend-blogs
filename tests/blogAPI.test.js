const {expect, describe} = require("@jest/globals")
const supertest = require('supertest')
const Blog = require('../models/blogs')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const User = require('../models/user')
const jwt = require('jsonwebtoken')

beforeEach(async () =>{
    await Blog.deleteMany({})
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('Sekret123!', 10)
    const user = new User({ username: 'root', name: 'Admin', passwordHash })

    await user.save()
})

test('Verify that the beforeEach works', async () =>{
    const initialUsers = await helper.usersInDb()
    expect(initialUsers).toHaveLength(1)
}, 30000)

describe('logging in',  () =>{

    test('logging in with a valid username', async () =>{
        const userInfo = {
            username: 'root',
            password: 'Sekret123!'
        }

        const response = await api.post('/api/login').send(userInfo).expect(200)
    })

    test('logging in returns a token', async () =>{
        const response = await api.post('/api/login').send(helper.initialUsers[0]).expect(200)
        const token = await response.body.token
        const verification = jwt.verify(token, process.env.SECRET)
        expect(token).toBeTruthy()
    }, 300000)

    test('logging in with an non-existing username returns 401', async () =>{
        const badUserInfo = {
            username: 'Miramaria',
            password: 'Pipotito123!'
        }
        const response = await api.post('/api/login').send(badUserInfo).expect(401)
    })

    test('logging in with incorrect password but valid username returns 401', async () =>{
        const goodUserBadPassword = {
            username: 'root',
            password: 'hYmalaia23!'
        }
        const response = await api.post('/api/login').send(goodUserBadPassword).expect(401)
    })
})

describe('Adding new users', () =>{

    test('Adding new user is successful, returns code 201 and user database is increased', async() =>{
        const initialUsers = await helper.usersInDb();
        const response = await api.post('/api/users').send(helper.initialUsers[1]).expect(201)
        const usersAfterNewUser = await helper.usersInDb();
        expect(usersAfterNewUser).toHaveLength(initialUsers.length + 1)

        const usernames = usersAfterNewUser.map(u => u.username)
        expect(usernames).toContain(helper.initialUsers[1].username)
    }, 30000)

    test('Adding new user with invalid username format returns error', async() =>{
        const userInfo = {
            username: 'li',
            name: 'li xio wun cha',
            password: 'Kungfu123!'
        }
        const response = await api.post('/api/users').send(userInfo).expect(400)

        expect(response.body).toContain("Username must be between 3-15 characters (numbers or letters) and only - and _ as special characters are allowed")
    })

    test('Adding new user with improper password format returns error', async () =>{
        const usersAtStart = await helper.usersInDb()
        const user = {
            username: 'ricardo',
            name: 'ricardo magallon',
            password: 'ricardito123'
        }
        const response = await api.post('/api/users').send(user).expect(400)
        expect(response.body).toContain("Password must contain a minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character")
    })

    test('Adding new user without name parameter returns error', async () =>{
        const usersAtStart = await helper.usersInDb()
        const user = {
            username: 'ricardo',
            password: 'Richy123!'
        }
        const response = await api.post('/api/users').send(user).expect(400)
        const userAtEnd = await helper.usersInDb()
        expect(userAtEnd).toHaveLength(usersAtStart.length)
    })
})

describe('/api/blogs API', () =>{
    let token = undefined;
    beforeEach(async ()=>{
        const logging = await api.post('/api/login').send(helper.initialUsers[0])
        token = logging.body.token

        await Blog.deleteMany({})

        for (let blog of helper.initialBlogsforRoot) {
            const response = await api.post('/api/blogs').set('Authorization', 'bearer ' + token).send(blog)
        }
    })

    test('if token is missing returns error', async () =>{
        const newBlog = {
            title: 'Working with captions',
            url: "https://helpx.adobe.com/premiere-pro/using/working-with-captions.html"
        }
        const response = await api.post('/api/blogs').send(newBlog).expect(401)
        expect(response.body).toEqual({error: 'missing token'})
    })

    test('Verify that the blog list application returns the correct amount of blog posts in the JSON format', async () =>{
        const response = await api.get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
        expect(response.body).toHaveLength(2)
    })

    test('Verify that the first blog title is the correct one', async () =>{
        const response = await api.get('/api/blogs')
        expect(response.body[0].title).toEqual(helper.initialBlogsforRoot[0].title)
    })

    test('Check that the database is returning ID property instead of _id', async () =>{
        const response = await api.get('/api/blogs')
        expect(response.body[0].id).toBeDefined()
    })

    // Posting
    test('Verify that posting a new blog its successful and assigned to the correct user', async () =>{
        const newBlog = {
            title: "Apple pensó en obtener un beneficio del 40% de algunas suscripciones de la App Store en 2011",
            author: "JESÚS QUESADA",
            url: "https://www.applesfera.com/servicios-apple/apple-penso-obtener-beneficio-40-algunas-suscripciones-app-store-2011"
        }
        const response = await api.post('/api/blogs').set('Authorization', "bearer " + token).send(newBlog)
        const blogsInDb = await api.get('/api/blogs')
        const usersInDB = await api.get('/api/users')
        expect(blogsInDb.body[blogsInDb.body.length - 1].user).toEqual(usersInDB.body[0].id)

    }, 30000)

    test("verifies that if the likes property is missing from the request, it will default to the value 0", async () =>{
        const newBlog = {
            title: "How to dance" ,
            author: 'Ricki Martin',
            url: "www.dancingamazing.com/tutorials/amazing"
        }
        const response = await api.post('/api/blogs').set('Authorization', 'bearer ' + token).send(newBlog).expect(201)
        expect(response.body.likes).toEqual(0)
    }, 60000)


    test("verifies that if the title and url properties are missing from the request data, the backend responds to the request with the status code 400 Bad Request.", async () =>{
        const newBlog = {
            author: 'Ricki Martin',
            likes: 100
        }

        const response = await api.post('/api/blogs')
            .set('Authorization', 'bearer ' + token)
            .send(newBlog).expect(400)

    }, 60000)

    // UPDATING A BLOG

    test('updating like numbers of a note', async () => {
        const blogsAtStart = await helper.notesInDb()
        const blogToUpdate = blogsAtStart[0]
        const newLikes = {
            likes: 500
        }
        await api.patch(`/api/blogs/${blogToUpdate.id}`).send(newLikes).expect(202)
        const blogsUpdated = await helper.notesInDb()
        const updatedNotedLikes = blogsUpdated[0].likes
        expect(updatedNotedLikes).toBe(newLikes.likes)
    })


})






afterAll(() => {
    mongoose.connection.close()
})