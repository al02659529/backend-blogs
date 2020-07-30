const {expect, describe} = require("@jest/globals")
// import {expect} from "@jest/globals";

const palindrome = require('../utils/for_testing').palindrome
const average = require('../utils/for_testing').average
const listHelper = require('../utils/list_helper')


test('palindrome of a', () => {
    const result = palindrome('a')

    expect(result).toBe('a')
})

test('palindrome of react', () => {
    const result = palindrome('react')

    expect(result).toBe('tcaer')
})

test('palindrome of releveler', () => {
    const result = palindrome('releveler')

    expect(result).toBe('releveler')
})

describe('average', () => {
    test('of one value is the value itself', () => {
        expect(average([1])).toBe(1)
    })

    test('of many is calculated right', () => {
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
    })

    test('of empty array is zero', () => {
        expect(average([])).toBe(0)
    })
})

test("dummy function", () =>{
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe("total likes", () =>{
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]

    test('when list has only one blog equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })
    const blogs = [ { _id: "5a422a851b54a676234d17f7", title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", __v: 0 }, { _id: "5a422aa71b54a676234d17f8", title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: null, __v: 0 }, { _id: "5a422b3a1b54a676234d17f9", title: "Canonical string reduction", author: "Edsger W. Dijkstra", url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html", likes: 12, __v: 0 }, { _id: "5a422b891b54a676234d17fa", title: "First class tests", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll", likes: 10, __v: 0 }, { _id: "5a422ba71b54a676234d17fb", title: "TDD harms architecture", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html", likes: 0, __v: 0 }, { _id: "5a422bc61b54a676234d17fc", title: "Type wars", author: "Robert C. Martin", url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html", likes: 2, __v: 0 }
    ]

    test('when there are multiple blogs', () =>{
        expect(listHelper.totalLikes(blogs)).toBe(24)
    })

    test('The blogs with most likes', () =>{
        expect(listHelper.favoriteBlog(blogs)._id).toEqual("5a422b3a1b54a676234d17f9")
    })

    test("author with most blogs", () =>{
        expect(listHelper.mostBlogs(blogs)).toEqual({"author": "Robert C. Martin", "count": 3})
    })

    test("author with most likes", () =>{
        expect(listHelper.mostLikes(blogs)).toEqual({"author": "Robert C. Martin", "likes": 12})
    })

})