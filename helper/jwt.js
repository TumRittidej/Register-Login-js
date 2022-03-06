const jwt = require("jsonwebtoken");
const env = require("../config/environment");

class Jwt {
  verify(access_token) {
    try {
      return jwt.verify(access_token, env.JWT_SECRET_KEY);
    } catch (error) {
      throw error;
    }
  }

  sign(user) {
    return jwt.sign(user, env.JWT_SECRET_KEY, { expiresIn: "60s" });
  }
}

module.exports.Jwt = Jwt;
