var express = require("express");
var router = express.Router();
const db = require("../db/index");
//const userModel = require("../models/user");
//const { body, validationResult } = require("express-validator");

var bcrypt = require("bcrypt");
const saltRounds = 10; //salt for hashing

//const { Sequelize } = require('../models');

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render("register", { title: "Register" });
});

const bodyParser = require("body-parser");
const { response } = require("../app");
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async function (req, res, next) {
  try {
    var username = req.body.username;
    var lastN = "last name"; //we dont have last name in register form so adding here, i'll remove lastname attrubute from db table
    var emails = req.body.email;
    var passwords = req.body.password;
    const todayDate = new Date();

    const hash = await bcrypt.hash(passwords, saltRounds); //hashing password
    await db.query(
      `INSERT INTO "Users" ("firstName","lastName","email","password","createdAt") 
        VALUES ( $1,$2,$3,$4,$5) returning *`,
      [username, lastN, emails, hash, todayDate]
    ).then,
      //res.send('hash');
      res.redirect("/login");
  } catch (errror) {
    console.log(errror);
  }
});

module.exports = router;
