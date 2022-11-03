const express = require("express");
const route = express.Router();
const Login = require("../schema/loginSchema");

require("../db/db");

route.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const valid = await Login.findOne({ username, password });
    if (valid) {
      res.status(200).json(valid);
    }
  } catch (e) {
    res.status(500).json({ message: "invalid" });
  }
});

route.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newLogin = new Login({ username, password });
    const saved = await newLogin.save();
    if (saved) {
      console.log("saved login");
      const loginData = await Login.find({ username, password });
      res.status(200).json(loginData);
    } else {
      console.log("didn't save");
    }
  } catch (e) {
    res.status(500).json({ message: "invalid" });
    console.log(e.message);
  }
});

module.exports = route;
