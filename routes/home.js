const express = require("express");
const { success } = require("../response");

// eslint-disable-next-line new-cap
const router = express.Router();

router.get("/", (req, res) => {
    success(res, "Home");
});

module.exports = router;
