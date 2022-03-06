const argon2 = require("argon2");
const { v4: uuid } = require("uuid");
const { AuthRepository } = require("../repository/auth.repository");
const authRepository = new AuthRepository();

class AuthService {
  async createUser(userRequest) {
    try {
      const { password } = userRequest;
      const user = {
        id: uuid(),
        ...userRequest,
        password: await argon2.hash(password),
      };
      return await authRepository.create(user);
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email) {
    try {
      const user = await authRepository.find(email);
      if (user.length === 0) {
        throw new Error("EmailNotFoundError");
      }
      return user[0];
    } catch (error) {
      throw error;
    }
  }

  async verifyPassword(dbPassword, requestPassword) {
    try {
      const isVerify = await argon2.verify(dbPassword, requestPassword);
      if (!isVerify) {
        throw new Error("PasswordInvalidError");
      }
      return isVerify;
    } catch (error) {
      throw error;
    }
  }
}

module.exports.AuthService = AuthService;
