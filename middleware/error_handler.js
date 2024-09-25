const response = require("../helper/response");

module.exports = (err,req,res,next) => {
    console.error(err);
    return response.error({
        message:err.message
    },res);
};