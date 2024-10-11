require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

module.exports = {
  regis: async (req, res) => {
    const data = req.body;

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    data.password = hash;

    const newUser = new User(data);
    newUser.save();

    res.json({
      message: "berhasil regis",
    });
  },

  login: async (req, res) => {
    const data = req.body;

    // cari user di dalam DB
    const user = await User.findOne({ username: data.username }).exec();
    if (!user) {
      res.json({ message: "gagal login" });
      return;
    }

    // cek password yg di DB dan inputan user
    const checkPassword = bcrypt.compareSync(data.password, user.password);
    if (!checkPassword) {
      res.json({ message: "gagal login" });
      return;
    }

    // Buat token
    const token = jwt.sign(
      { username: user.username }, // payload
      process.env.JWT_KEY // secret key
    );

    res.json({
      message: "berhasil login",
      token,
    });
  },
};
