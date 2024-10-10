require("dotenv").config();
const mongoose = require("mongoose");

const dbURL = process.env.DB_URL;

const db = mongoose.connect(dbURL);

module.exports = db;
