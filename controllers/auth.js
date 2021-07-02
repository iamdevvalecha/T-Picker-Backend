const User = require("../models/user");

exports.signup = async (req, res) => {
  const { name,lastname, email, encry_password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }
    let newUser = new User({ name, lastname, email, encry_password });
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({ error: err })
      }
      res.json({
        message: "User Signup"
      })
    })
  });
};

exports.signout = (req, res) => {
    res.json({
      message: "User signout",
    });
 };
  