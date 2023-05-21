const router = require("express").Router()
const usersRoute = require("./userRoutes.js")//import the users routing js page

router.use('/weather', usersRoute) //URL

module.exports = router
