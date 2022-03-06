const { Jwt } = require("../helper/jwt");
const jwt = new Jwt();

module.exports = async (req, res, next) => {
  try {
    const access_token = req.headers["authorization"].split(" ")[1];
    const user = jwt.verify(access_token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized." });
  }
};
