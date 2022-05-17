var express = require('express');
var router = express.Router();
const db = require("../db/index");

/* GET user profile page. */
router.get('/:uid', async function(req, res, next) {
    var myuser = {
        username: "chitran",
        bio: "this is user bio",
        wins: 12,
        loses: 8,
        photo: "/images/userphoto.png",
        history: [{
            status: "W",
            date: "Tue 3/5/2022",
            duration:"20 minutes",
            players_num: 4,
            players_list: ["@player1", "@player2", "@player3"]
        },
        {
            status: "L",
            date: "Tue 3/5/2022",
            duration:"20 minutes",
            players_num: 2,
            players_list: ["@player1"]
        },
        {
            status: "W",
            date: "Tue 3/5/2022",
            duration:"20 minutes",
            players_num: 2,
            players_list: ["@player1", "@player2"]
        },
        {
            status: "L",
            date: "Tue 3/5/2022",
            duration:"20 minutes",
            players_num: 2,
            players_list: ["@player1"]
        },
        {
            status: "W",
            date: "Tue 3/5/2022",
            duration:"20 minutes",
            players_num: 2,
            players_list: ["@player1", "@player2"]
        },
        {
            status: "L",
            date: "Tue 3/5/2022",
            duration:"20 minutes",
            players_num: 2,
            players_list: ["@player1"]
        }],
    }
    var uid = req.params.uid;
    const userAccount = await db.query(
        `SELECT * FROM "Users" WHERE id=$1 LIMIT 1;`,
        [uid]
    );

    var user = {
        id: userAccount.rows[0].id,
        username: userAccount.rows[0].firstName,
        bio: userAccount.rows[0].email,
        wins: 0,
        loses: 0,
        photo: "/images/userphoto.png",
        history: [],
      }

    console.log("in userprofile get ", user);
    res.render('userprofile', { title: "User Profile", user: user, sessionUser: (req.session.user) ? req.session.user : null});
});

module.exports = router;