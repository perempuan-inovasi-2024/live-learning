const express = require("express");
const route = express.Router();

const movieRoute = require("./movie-route");
const directorRoute = require("./director-route");

route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di movie app",
  });
});

route.use("/movies", movieRoute);
route.use("/directors", directorRoute);

module.exports = route;
