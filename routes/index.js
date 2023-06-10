const router = require("express").Router()
const usersRoute = require("./userRoutes.js")//import the users routing js page
const blogRoute = require ('./blogRoutes.js') // importing the blog routing js page
const uploadRoutes = require('./uploadRoutes');

// router.use('/weather', usersRoute) //URL
router.use('/', blogRoute)
// router.post('/blog/create', blogRoute.createBlogs)
// router.post('/blog-index/create', blogsCtrl.createBlogs)
// router.put('/blog-index/:id', blogsCtrl.updateBlog)
// router.post('/blog-index/:id', blogsCtrl.showBlog)
// router.delete('blog-index/:id', blogsCtrl.deleteBlog)
// router.use('/upload', uploadRoutes);

module.exports = router
