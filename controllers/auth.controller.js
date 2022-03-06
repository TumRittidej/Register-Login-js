const router = require("express").Router();
const { Jwt } = require("../helper/jwt");
const { AuthService } = require("../services/auth.service");
const authService = new AuthService();
const jwt = new Jwt();

router.post("/register", async (req, res) => {
  try {
    await authService.createUser(req.body);
    return res.status(201).json({ msg: "Register Succussfully!" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password: requestPassword } = req.body;
    const { id, password, first_name, last_name } =
      await authService.findByEmail(email);
    await authService.verifyPassword(password, requestPassword);
    return res.status(200).json({
      msg: "Login Succussfully!",
      access_token: jwt.sign({ id }),
      email,
      first_name,
      last_name,
    });
  } catch (error) {
    switch (error.message) {
      case "EmailNotFoundError":
        res.status(404).json({ msg: "Email not found." });
        break;
      case "PasswordInvalidError":
        res.status(401).json({ msg: "Password invalid." });
        break;
      default:
        res.status(500).json({ msg: error });
        break;
    }
  }
});

module.exports = router;
