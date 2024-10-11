const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  overview: String,
  year: Number,
  director: {
    type: mongoose.ObjectId,
    ref: "Director",
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

// "title": "Spirited Away",
// "overview": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
// "year": 2001,
// "director": "Hayao Miyazaki"
