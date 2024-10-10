const express = require("express");
const {
  getAllMovie,
  getMovieById,
  addMovie,
  editMovieById,
  deleteMovieById,
} = require("../controllers/movie-controller");
const route = express.Router();

route.get("/", getAllMovie);
route.get("/:id", getMovieById);
route.post("/", addMovie);
route.put("/:id", editMovieById);
route.delete("/:id", deleteMovieById);

module.exports = route;
