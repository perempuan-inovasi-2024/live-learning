const Director = require("../models/Director");

module.exports = {
  getAllDirector: async (req, res) => {
    const data = await Director.find({});

    res.json({
      message: "berhasil mendapatkan data",
      data,
    });
  },
  getDirectorById: (req, res) => {},

  addDirector: (req, res) => {
    const data = req.body;

    const newDirector = new Director(data);
    newDirector.save();

    res.json({
      message: "data berhasil dibuat",
    });
  },
  editDirectorById: (req, res) => {},
  deleteDirectorById: (req, res) => {},

  addDirectorBulk: () => (req, res) => {},
};
