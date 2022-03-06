const db = require("../config/connection");

// connect db
class TestRepository {
  findAll() {
    // db.query();
    return [{ id: 1, name: "Boy" }];
  }
}
module.exports.TestRepository = TestRepository;
