const query = require("../helper/query");

class AuthRepository {
  async create({ id, first_name, last_name, email, password }) {
    const sql =
      "INSERT INTO user (id, first_name, last_name, email, password) VALUES (?,?,?,?,?)";
    const values = [id, first_name, last_name, email, password];
    return await query(sql, values);
  }

  async find(email) {
    const sql = "SELECT * FROM user WHERE email = ?";
    const value = [email];
    return await query(sql, value);
  }
}

module.exports.AuthRepository = AuthRepository;
