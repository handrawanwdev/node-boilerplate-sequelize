const express = require("express");
const router = express.Router();

// resource
const users_router = require("../resource/user/user.route");

router.use("/user",users_router);

module.exports = router;
