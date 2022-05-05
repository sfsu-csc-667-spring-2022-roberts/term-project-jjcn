const express = require("express");
const router = express.Router();
//const db = require('../db/index.js');

const db = require('../db/index');


router.get("/", (request, response) => {
    testVar = 'its working!!';
    var username = 'Test P';//req.body.username;
    var lastN = 'last name';
    var emails = 'testPage@gmail.com';//req.body.email'';
    //var passwords = req.body.password;

   //db.query(`INSERT INTO test_table ("testString") VALUES ($1) RETURNING *`,[testVar])
    // db.query(`INSERT INTO "Users" ("firstName", "lastName", "email") 
	// VALUES ( 'Nusan', 'Adhikari','nusan14@gmail.com') `)
    db.query(`INSERT INTO "Users" ("firstName","lastName","email") 
	VALUES ( $1,$2,$3) returning *`, [username, lastN, emails])
        .then(_ => db.any(`SELECT * FROM test_table`))
        .then(results => response.json(results))
        .catch(error => {
            console.log("hi")

            console.log(error)
            response.json({ error })
        })
});




module.exports = router, db;