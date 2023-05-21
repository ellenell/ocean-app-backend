// const db = require('../models') //this is where our db mongoose connection lives as well as our models

const getUser = (req, res) => {
  // db.People.find({})  <-- db has all our models in it so we can use any of them here with one line! 
  res.send('getUser')
}

const createUser = (req, res) => {
  // db.People.create({name: 'testing'})
  // .then((res) => {console.log(res)})
  res.send('createUser')
}

module.exports = {
  getUser, 
  createUser
}
