const express = require("express");
const router = express.Router();
//const db = require('../db/index.js');

const db = require('../db/index');


router.get("/", (request, response) => {
   // db.query(`INSERT INTO test_table ("testString") VALUES ('Hello at ${Date.now()}')`)
   db.query(`INSERT INTO Users (firstName, lastName, email, createdAt, updatedAt) 
	VALUES ( 'Nusan', 'Adhikari','nusan14@gmail.com',${Date.now()},${Date.now()}) `)
        .then(_ => db.any(`SELECT * FROM test_table`))
        .then(results => response.json(results))
        .catch(error => {
            console.log("hi")

            console.log(error)
            response.json({ error })
        })
});




module.exports = router, db;