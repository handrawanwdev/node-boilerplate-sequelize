const user_service = require("./user.service");
const user_repository = require("./user.repository");

const response = require("../../helper/response");


module.exports = {

    getUser:async(req,res)=>{
        try {
            let payload = await user_repository.User.findAll({});
            return response.ok(payload,res);
        } catch (error) {
            console.log(error);
            return response.error({
                message:error.message
            },res);
        }
    }

};