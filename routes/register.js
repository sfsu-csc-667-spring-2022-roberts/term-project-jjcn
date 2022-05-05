var express = require("express");
var router = express.Router();
const userdb = require("../db/index");

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render("register", { title: "Register" });
});

const bodyParser = require("body-parser");
const { response } = require("../app");
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async function (req, res, next) {
  var username = req.body.username;
  var lastN = "last name"; //we dont have last name in register form so adding here, i'll remove lastname attrubute from db table
  var emails = req.body.email;
  var passwords = req.body.password; //password only accepts integer, need to make it integer
  //var success = "account info has been received $1"
  // console.log(emails, username, passwords);

  //inserting user registration info into user database
  const todayDate = new Date();
  userdb.query(
    `INSERT INTO "Users" ("firstName","lastName","email","password","createdAt") 
	VALUES ( $1,$2,$3,$4,$5) returning *`,
    [username, lastN, emails, passwords, todayDate]
  ).then,
    res.send("account info has been received: " + username);
});
(module.exports = router);
