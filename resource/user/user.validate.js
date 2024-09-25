const user_validate = {
    "login":{
        "email": "required|string|email",
        "password": "required|string"
    }
};

module.exports = user_validate;