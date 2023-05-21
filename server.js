///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
const { PORT } = process.env;

// import express
const express = require("express");
// create application object
const app = express();

//import all available routes in our /routes/index.js the user can use
const routes = require('./routes/index')

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
// app.get("/", (req, res) => {
//     res.send("hello world");
// });

app.use('/', routes) //check the routes index.js for ALL routes so we save space on server.js

//catch all 404 route! 
app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})})


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => 
console.log(`listening on PORT ${PORT}`));
