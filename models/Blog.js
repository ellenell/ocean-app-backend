const mongoose = require('mongoose')

///////////////////////////////
// MODELS
////////////////////////////////
const BlogSchema = new mongoose.Schema({
  date: { type: Date },
  name: { type: String},
  image: { type: String },
  description: { type: String },
  typeofactivity: { type: String },

});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;