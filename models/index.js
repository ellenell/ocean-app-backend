const mongoose = require("mongoose");
const { DATABASE_URL } = process.env
///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection

console.log(DATABASE_URL)

mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});




// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

  module.exports = {
    Blog: require("./Blog.js"),
    User: require('./User.js')
}