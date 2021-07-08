const User = require("../models/user");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "not able to save user",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id
    });
  });
};

// controller for signin route
exports.signin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({
        err: "not able to find user",
      });
    }
    if (!user) {
      return res.status(400).json({
        err: "user not found",
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        err: "wrong password",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id
    });
  });
};

exports.signout = (req, res) => {
  res.json({
    message: "User signout",
  });
};
