const path = require("path");
module.exports = {
    handleLogin: (req, res) => {
        res.render("login");
    },
    handleHomePage: (req, res) => {
        res.render("index.html");
    },
    handleSuitPage: (req, res) => {
        res.render("suit");
    },
};
