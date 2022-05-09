var express = require("express");
var router = express.Router();
const db = require("../db/index");
//const userModel = require("../models/user");
//const { body, validationResult } = require("express-validator");

var bcrypt = require("bcrypt");
const saltRounds = 10; //salt for hashing

//const { Sequelize } = require('../models');
//const sequelize = new Sequelize('postgres://skguvcdbcvhjyk:b2559196d59c670bcea4a8f9b74585bf4d7c1f6c18ba1e19f41ee0e7a1cf07ac@ec2-52-73-155-171.compute-1.amazonaws.com:5432/dac4pp1tnr8kp2');

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
