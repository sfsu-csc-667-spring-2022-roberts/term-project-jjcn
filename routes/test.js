const express = require("express");
const router = express.Router();
//const db = require('../db/index.js');
const card = require("../models/card");
var bcrypt = require("bcrypt");
const db = require("../db/index.js");
const { sequelize, User } = require("../models/user");
const res = require("express/lib/response");

router.get("/", async (request, response) => {
  //await sequelize.sync();
  testVar = "Hello at ";
  const todayDate = new Date();
  const passwords = "password";
  var userPassword = "";
  //const user = await db('Users').first('*').where({email:'Testing@yahoo.com'});
  //response.status(200).json('All Good');
  //console.log(user);
  // const conP = await db.query(
  //   `SELECT password FROM "Users" WHERE email='page@register.com' LIMIT 1;`
  // );

  // for (let row of conP.rows) {
  //   userPassword = row.password;
  // }
  // console.log(userPassword);
  // let hashP = await bcrypt.hash(userPassword, 10);
  // console.log(hashP);
  // bcrypt.compare(userPassword, hashP).then(function (result) {
  //   result == true;
  //   console.log(result);
  // });
  // var username = 'Test P';//req.body.username;
  // var lastN = 'last name';
  // var emails = 'testPage@gmail.com';//req.body.email'';
  //var passwords = req.body.password;
  // db.query(`INSERT INTO "Users" ("firstName", "lastName", "email")
  // VALUES ( 'Nusan', 'Adhikari','nusan14@gmail.com') `)
  // db.query(`INSERT INTO "Users" ("firstName","lastName","email")
  // VALUES ( $1,$2,$3) returning *`, [username, lastN, emails])

  db.query(`INSERT INTO test_table ("testString") VALUES ($1 ) RETURNING *`, [
    testVar + todayDate,
  ]).then,
    response
      .send(todayDate)
      ;

  // const accountEmail = db.query(
  //   `SELECT * FROM test_table WHERE id=1; `);
  //   response.send(accountEmail);
  //   console.log(accountEmail);
});

(module.exports = router), db;
