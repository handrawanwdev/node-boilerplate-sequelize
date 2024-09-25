const role_service = require("./role.service");
const role_repository = require("./role.repository");

const response = require("../../helper/response");


module.exports = {

    getrole:async(req,res)=>{
        try {
            let payload = [];
            return response.ok(payload,res);
        } catch (error) {
            return response.error({},res);
        }
    }

};