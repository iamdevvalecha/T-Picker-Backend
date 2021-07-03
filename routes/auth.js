var express = require("express");
var router = express.Router();
const { signup, signout } = require("../controllers/auth");

router.post("/signup", signup);
router.get("/signout", signout);

module.exports = router;
