const router = require("express").Router()
const usersRoute = require("./userRoutes.js")//import the users routing js page
const blogRoute = require ('./blogRoutes.js') // importing the blog routing js page

// router.use('/weather', usersRoute) //URL
router.use('/blog', blogRoute)

module.exports = router
