var express = require("express");
var router = express.Router();
const db = require("../db/index");
var bcrypt = require("bcrypt");

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render("login", { title: "Log In" });
});

const bodyParser = require("body-parser");
const res = require("express/lib/response");
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  const userAccount = await db.query(
    `SELECT password FROM "Users" WHERE email=$1 LIMIT 1;`,
    [username.trim()]
  );
  console.log("connected to db");

  let hashPassword = "";
  for (let row of userAccount.rows) {
    hashPassword = row.password;
    console.log(hashPassword);
  }
  //console.log(hashPassword);
  bcrypt.compare(password, hashPassword).then(function (result) {
    result == true;
    if (result) {
      res.redirect("/userprofile");
    } else {
      res.send("invalid password or email");
    }
  });
});

module.exports = router;
