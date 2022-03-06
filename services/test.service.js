const { TestRepository } = require("../repository/test.repository");
const testRepository = new TestRepository();

// logic
class TestService {
  async getTestList() {
    return await testRepository.findAll();
  }
}

module.exports.TestService = TestService;
