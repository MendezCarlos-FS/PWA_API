const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const userCtrl = require("../controllers/user.js");
const { validateEmail, validatePhone, validateName, validateBirthday, validatePassword } = require("../middlewares/utils.js");

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/signup', jsonParser, validateName, validateEmail, validatePhone, validatePassword, validateBirthday, userCtrl.signup);

module.exports = router