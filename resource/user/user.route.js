const router = require("express").Router();
const user_controller = require("./user.controller");
const user_validate = require("./user.validate");

const auth = require("../../middleware/auth");

const validation = require("../../middleware/validation-middleware");

router.get("/",user_controller.getUser);
router.post("/login",validation.body(user_validate.login),user_controller.login);

module.exports = router;