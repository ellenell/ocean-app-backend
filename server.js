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

// add this - import middlware
const cors = require("cors");


const bodyParser = require('body-parser');

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors("*")); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parse json bodies

// DATABASE CONNECTION 
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//import all available routes in our /routes/index.js the user can use
const routes = require('./routes/index')

// const uploadRoutes = require('./routes/uploadRoutes'); 

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
// app.get("/", (req, res) => {
//     res.send("hello world");
// });

// app.use('/upload', uploadRoutes); 

app.use('/', routes) //check the routes index.js for ALL routes so we save space on server.js

//catch all 404 route! 
app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})})


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => 
console.log(`listening on PORT ${PORT}`));
