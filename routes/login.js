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

    try {
        const userAccount = await db.query(
            `SELECT * FROM "Users" WHERE email=$1 LIMIT 1;`,
            [username.trim()]
        );
        console.log("connected to db", userAccount.rows[0]);

        var user = {
            id: userAccount.rows[0].id,
            username: userAccount.rows[0].firstName,
            bio: userAccount.rows[0].email,
            wins: 0,
            loses: 0,
            photo: "/images/userphoto.png",
            history: [],
        };

        let hashPassword = "";
        for (let row of userAccount.rows) {
            hashPassword = row.password;
            console.log(hashPassword);
        }
        //console.log(hashPassword);
        bcrypt.compare(password, hashPassword).then(function (result) {
            result == true;
            if (result) {
                //       console.log("rezz11", userAccount.rows[0].firstName, user.firstName, user.email);
                //       res.redirect("/userprofile");
                req.session.isLoggedIn = true;
                req.session.user = user;
                console.log("in login my session:", req.session);
                res.render("lobby", { sessionUser: user });
            } else {
                res.send("invalid password or email");
            }
        });
    } catch (err) {
        console.log(err);
        res.send("Error finding user in database\n");
    }
});

module.exports = router;
