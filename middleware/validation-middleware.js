const validator = require("../helper/validate");

module.exports = {
  header: (validationRule) => {
    return async (req, res, next) => {
      const field = req.headers;
      await validator(field, validationRule, {}, (err, status) => {
        if (!status) {
          res.status(412).send({
            success: false,
            message: "Validation failed",
            data: err,
          });
        } else {
          next();
        }
      }).catch((err) => console.log(err));
    };
  },
  body: (validationRule) => {
    return async (req, res, next) => {
      const field = req.body;
      await validator(field, validationRule, {}, (err, status) => {
        if (!status) {
          res.status(412).send({
            success: false,
            message: "Validation failed",
            data: err,
          });
        } else {
          next();
        }
      }).catch((err) => console.log(err));
    };
  },
  query: (validationRule) => {
    return async (req, res, next) => {
      const field = req.query;
      await validator(field, validationRule, {}, (err, status) => {
        if (!status) {
          res.status(412).send({
            success: false,
            message: "Validation failed",
            data: err,
          });
        } else {
          next();
        }
      }).catch((err) => console.log(err));
    };
  },
  param: (validationRule) => {
    return async (req, res, next) => {
      const field = req.params;
      await validator(field, validationRule, {}, (err, status) => {
        if (!status) {
          res.status(412).send({
            success: false,
            message: "Validation failed",
            data: err,
          });
        } else {
          next();
        }
      }).catch((err) => console.log(err));
    };
  },
};
