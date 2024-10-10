const Movie = require("../models/Movie");

module.exports = {
  getAllMovie: async (req, res) => {
    const data = await Movie.find({}).populate("director");

    res.json({
      message: "berhasil mendapatkan data",
      data,
    });
  },
  getMovieById: (req, res) => {},
  addMovie: (req, res) => {
    const data = req.body;

    const newMovie = new Movie(data);
    newMovie.save();

    res.json({
      message: "data berhasil dibuat",
    });
  },
  editMovieById: (req, res) => {},
  deleteMovieById: (req, res) => {},
};
