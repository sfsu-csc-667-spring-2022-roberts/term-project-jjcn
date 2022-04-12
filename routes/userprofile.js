var express = require('express');
var router = express.Router();

/* GET user profile page. */
router.get('/', function(req, res, next) {
    var user = {
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
    console.log(user);
    res.render('userprofile', { title: "User Profile", user: user });
});

module.exports = router;