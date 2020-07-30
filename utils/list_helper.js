
const dummy = (blogs) =>{
    return 1
}

const totalLikes = (blogs) =>{
    const likes = blogs.filter(blog => blog.likes > 0)
    return likes.reduce((acc, cv) => acc + cv.likes, 0);
}

const favoriteBlog = (blogs) => {
    const blogsThatHasLikesBiggerThanZero = blogs.filter(blog=> blog.likes > 0)
    return blogsThatHasLikesBiggerThanZero.reduce((acc, next) => acc.likes > next.likes ? acc : next)
}

const blogCountByAuthor = (blogs) => {
    console.log("length of initial array: ", blogs.length)
    const blogsWhereThereIsAnAuthor = blogs.filter(blog=> blog.author)
    console.log("length of filtered array", blogsWhereThereIsAnAuthor.length)
    let authorsAndLikes = []

    // helper to determine if the loop should continue or not
    let contin = undefined;
    blogsWhereThereIsAnAuthor.forEach((blog, index) => {

        // initialize concentrado
        console.log("loop for: ", blog.author)
        if (authorsAndLikes.length < 1){
            authorsAndLikes.push({"author": blog.author, "count": 1})
            console.log("initial data", authorsAndLikes)
            return
        }

        authorsAndLikes.forEach((item) => {
            console.log(item.author, "|", blog.author, item.author === blog.author)
            if (item.author === blog.author) {
                console.log("case 1: existing author", item.author, "|", blog.author)
                console.log(item)
                item.count += 1;
                console.log(item)
                console.log(authorsAndLikes)
                contin = false;
                return false;
            }
            contin = true;

        })
        if (contin !== false) {
            console.log("case 2: new author, adding it to concentrado array", blog.author)
            authorsAndLikes.push({"author": blog.author, "count": 1})
            console.log(authorsAndLikes)
            console.log("end of iteration case 2")
        }
    })

    return authorsAndLikes;

}

const mostBlogs = (blogs) =>{

    const blogsCount = blogCountByAuthor(blogs);

    return blogsCount.reduce((curr, sum) => curr.count > sum.count ? curr : sum )

}
const likesByAuthor = (blogs) =>{
    const blogsWhereThereIsAnAuthor = blogs.filter(blog=> blog.author)
    console.log("length of filtered array", blogsWhereThereIsAnAuthor.length)
    let authorsAndLikes = []
    let contin = undefined;
    blogsWhereThereIsAnAuthor.forEach((blog, index) => {
        let author = blog.author;
        let likes = blog.likes;
        // initialize concentrado
        console.log("loop for: ", author)
        if (!likes){
            return false
        }
        if (authorsAndLikes.length < 1){
            authorsAndLikes.push({author, likes})
            console.log("initial data", authorsAndLikes)
            return
        }

        authorsAndLikes.forEach((item) => {
            console.log(item.author, "|", blog.author, item.author === blog.author)
            if (item.author === blog.author) {
                console.log("case 1: existing author", item.author, "|", blog.author)
                console.log(item)
                item.likes += blog.likes;
                console.log(item)
                console.log(authorsAndLikes)
                contin = false;
                return false;
            }
            contin = true;

        })
        if (contin !== false) {
            console.log("case 2: new author, adding it to concentrado array", blog.author)
            authorsAndLikes.push({"author": author, "likes": likes})
            console.log(authorsAndLikes)
            console.log("end of iteration case 2")
        }
    })

    return authorsAndLikes;
}

const mostLikes = (blogs) =>{
    const likesCountByAuthor = likesByAuthor(blogs)
    return likesCountByAuthor.reduce((curr, sum) => curr.likes > sum.likes ? curr : sum)
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    blogCountByAuthor,
    mostBlogs,
    mostLikes
}