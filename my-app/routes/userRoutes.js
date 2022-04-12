var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
    res.render("login", {title: 'Log In'});
});

router.get('/register', (req, res) => {
    res.render("register", {title: 'Register'});
});

router.get('/logout', (req, res) => {
    console.log("User logged out");
    res.render("/", {Title: "Home"});
});

router.get('/updateProfile', (req, res) => {
    console.log("User wants to update their profile");
});

router.get('/report', (req, res) => {
    console.log("User wants to report player: ");
});