const mongoose = require('mongoose')

///////////////////////////////
// MODELS
////////////////////////////////
const BlogSchema = new mongoose.Schema({
  date: { type: Date },
  name: { type: String},
  image: { type: String },
  description: { type: String },
  typeOfActivity: { 
    type: String,
    enum: ['Surfing', 'Kayaking', 'Sailing', 'Snorkeling']
   },

});


const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
