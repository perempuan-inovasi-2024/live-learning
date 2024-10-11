const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  name: String,
  birthDate: Date,
  oscar: Boolean,
});

const Director = mongoose.model("Director", directorSchema);

module.exports = Director;

// "name": "Christopher Nolan",
// "birth_date": "1970-07-30",
// "oscar": false
