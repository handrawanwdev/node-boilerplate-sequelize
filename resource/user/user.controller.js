const user_service = require("./user.service");
const user_repository = require("./user.repository");

const {
  checkPass
} = require("../../helper/hashing");
const jwtToken = require("../../helper/jwt_token");

const response = require("../../helper/response");

module.exports = {
  getUser: async (req, res) => {
    try {
      let payload = await user_repository.User.findAll({});
      return response.ok(payload, res);
    } catch (error) {
      console.error(error.stack);
      return response.error(
        {
          message: error.message,
        },
        res
      );
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      let account = await user_repository.User.findOne({ where: { email } });

      if (!account) {
        // account not found
        return response.unauthorized(
          { sign: "401" },
          res,
          "Email or Password not match!"
        );
      } else {
        const correctPassword = await checkPass(password, account.password);
        if (correctPassword) {
          // password match
          const token = await jwtToken.generateToken({
            id: account.id,
            email: account.email,
          });

          return response.ok(
            {
              access_token: token,
              email:account.email
            },
            res,
            "Login Success!"
          );
        } else {
          // password not match
          return unauthorized(
            { sign: "401" },
            res,
            "Email or password not match!"
          );
        }
      }
    } catch (error) {
      console.error(error.stack);
      return response.error(
        {
          message: error.message,
        },
        res
      );
    }
  },
};
