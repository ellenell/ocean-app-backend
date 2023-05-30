const express = require("express");
const db = require('../models') //this is where our db mongoose connection lives as well as our models

// const bcrypt = require("bcryptjs");

// const User = db.User;

// GET BLOG
const getBlog = (req, res) => {
    // db.User.find({})  <-- db has all our models in it so we can use any of them here with one line! 
    // res.send('getUser')
    db.Blog.find({})
    .then((foundBlog) => {
        if(!foundBlog){
            res.status(404).json({message: 'Cannot find Blog'})
        } else {
            res.status(200).json({data: foundBlog})
        }
    })
}

// BLOG CREATE ROUTE
const createBlog = (req, res) => {
    // db.User.create({name: 'testing'})
    // .then((res) => {console.log(res)})
    // res.send('createUser')
    db.Blog.create(req.body)
    .then((createdBlog) => {
        if(!createdBlog){
            res.status(400).json({message: 'Cannot create Blog'})
        } else {
            res.status(201).json({data: createdBlog, message: 'Blog created'})
        }
    })
}

// BLOG UPDATE ROUTE
const updateBlog = (req, res) => {
  db.Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((updatedBlog) => {
      if(!updatedBlog){
          res.status(400).json({message: 'Cannot update Blog'})
      } else {
          res.status(201).json({data: updatedBlog, message: 'Blog updated'})
      }
  })
}

// BLOG SHOW ROUTE
const showBlog = (req, res) => {
  db.Blog.findById(req.params.id, req.body, {new: true})
  .then((foundBlog) => {
      if(!foundBlog){
          res.status(400).json({message: 'Cannot find Blog'})
      } else {
          res.status(201).json({data: foundBlog, message: 'Blog found'})
      }
  })
}

// BLOG DELETE ROUTE
const deleteBlog = (req, res) => {
  db.Blog.findByIdAndDelete(req.params.id)
  .then((deletedBlog) => {
      if(!deletedBlog){
          res.status(400).json({message: 'Cannot delete Blog'})
      } else {
          res.status(201).json({data: updatedBlog, message: 'Blog deleted'})
      }
  })
}


module.exports = {
  getBlog, 
  createBlog,
  updateBlog,
  showBlog, 
  deleteBlog,
}
