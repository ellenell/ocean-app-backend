// const db = require('../models') //this is where our db mongoose connection lives as well as our models
// const express = require("express");
// // const bcrypt = ("bcryptjs");

// const User = db.User;

// // USER INDEX ROUTE
// const getUser = (req, res) => {
//     // db.User.find({})  <-- db has all our models in it so we can use any of them here with one line! 
//     // res.send('getUser')
//     db.User.find({})
//     .then((foundUser) => {
//         if(!foundUser){
//             res.status(404).json({message: 'Cannot find User'})
//         } else {
//             res.status(200).json({data: foundUser})
//         }
//     })
// }

// // USER CREATE ROUTE
// const createUser = (req, res) => {
//     // db.User.create({name: 'testing'})
//     // .then((res) => {console.log(res)})
//     // res.send('createUser')
//     db.User.create(req.body)
//     .then((createdUser) => {
//         if(!createdUser){
//             res.status(400).json({message: 'Cannot create user'})
//         } else {
//             res.status(201).json({data: createdUser, message: 'User created'})
//         }
//     })
// }


// module.exports = {
//   getUser, 
//   createUser
// }
