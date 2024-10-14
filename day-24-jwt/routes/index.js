const express = require("express");
const route = express.Router();

const movieRoute = require("./movie-route");
const directorRoute = require("./director-route");
const authRoute = require("./auth-route");
const { validateToken } = require("../middleware/auth");

route.use((req, res, next) => {
  console.log("middleware untuk semua route");
  next();
});

route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di movie app",
  });
});

route.use("/auth", authRoute);
route.use("/movies", movieRoute);
route.use("/directors", validateToken, directorRoute);

module.exports = route;
