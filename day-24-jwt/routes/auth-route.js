const express = require("express");
const { regis, login } = require("../controllers/auth-controller");

const route = express.Router();

route.post("/regis", regis);
route.post("/login", login);

module.exports = route;
