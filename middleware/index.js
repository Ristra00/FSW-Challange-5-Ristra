const { user } = require("../database");
const { fail, clientError } = require("../response");
const { validationResult } = require("express-validator");
module.exports = {
    checkUserMiddleware: (req, res, next) => {
        const { email, password } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return clientError(res, errors.array());
        }
        const obj = user.find((u) => u.email === email);
        if (obj) {
            if (obj.password === password) {
                next();
            } else {
                fail(res, "wrong password");
            }
            return;
        }
        fail(res, "no user found");
        return;
    },
};
