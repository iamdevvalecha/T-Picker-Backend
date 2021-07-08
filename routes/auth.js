var express = require("express");
var router = express.Router();
const { signup, signin, signout } = require("../controllers/auth");
const { check } = require('express-validator');

router.post("/signup", [
    "/user",
    check("name")
        .isLength({ min: 1 }),
    check("email")
        .isEmail(),
    check("password", 'The password must be 5+ chars long and contain a number')
        .isLength({ min: 5 }),
    signup], signup);

router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
