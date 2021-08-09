const express = require("express");
const path = require("path");
const { checkUserMiddleware } = require("../middleware");
const { handleLogin, handleDetailUser } = require("../handler/api");
const { body } = require("express-validator");

// eslint-disable-next-line new-cap
const router = express.Router();

router.use(express.static(path.join(__dirname, "public")));

router.post(
    "/login",
    [
        // username must be an email
        body("email").isEmail(),
        // password must be at least 5 chars long
        body("password").isLength({ min: 5 }),
    ],
    checkUserMiddleware,
    handleLogin
);
router.get("/user/:email", handleDetailUser);
module.exports = router;
