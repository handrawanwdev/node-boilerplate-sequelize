const CONTROLLER = `const [MODUL_NAME]_service = require("./[MODUL_NAME].service");
const [MODUL_NAME]_repository = require("./[MODUL_NAME].repository");

const response = require("../../helper/response");


module.exports = {

    get[MODUL_NAME]:async(req,res)=>{
        try {
            let payload = [];
            return response.ok(payload,res);
        } catch (error) {
            return response.error({},res);
        }
    }

};`;

const REPOSITORY=`const {
    [MODUL_NAME]
} = require("../../models");

module.exports = {

};`;

const ROUTER=`const router = require("express").Router();
const user_controller = require("./user.controller");

const auth = require("../../middleware/auth");


module.exports = router;`;

const SERVICE=`const user_repository = require("./user.repository");

module.exports = {

};`;

const SCHEMA = `const [MODUL_NAME]_validate ={
  email: "required|string|email",
  password: "required|string"
};
module.exports = [MODUL_NAME]_validate;`;

module.exports = {
    CONTROLLER,
    REPOSITORY,
    ROUTER,
    SERVICE,
    SCHEMA
}