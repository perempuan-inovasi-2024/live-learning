const express = require("express");
const {
  getAllDirector,
  getDirectorById,
  addDirector,
  editDirectorById,
  deleteDirectorById,
  addDirectorBulk,
} = require("../controllers/director-controller");
const route = express.Router();

route.get("/", getAllDirector);
route.get("/:id", getDirectorById);
route.post("/", addDirector);
route.post("/seeder", addDirectorBulk);

route.put("/:id", editDirectorById);
route.delete("/:id", deleteDirectorById);

module.exports = route;
