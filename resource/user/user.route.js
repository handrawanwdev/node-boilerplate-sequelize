const router = require("express").Router();
const user_controller = require("./user.controller");

const auth = require("../../middleware/auth");

router.get("/",user_controller.getUser);

module.exports = router;