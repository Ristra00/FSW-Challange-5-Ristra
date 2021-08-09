const { user } = require("../database");
const { success, fail } = require("../response");

module.exports = {
    handleLogin: (req, res) => {
        // res.render('index', {email: 'aasajkdaskaf'})
        res.redirect("/");
    },
    handleDetailUser: (req, res) => {
        const { email } = req.params;
        const userObj = user.find((u) => u.email === email);
        if (userObj) {
            success(res, userObj);
            return;
        }
        fail(res, `user with email ${email} not exist`);
        return;
    },
};
