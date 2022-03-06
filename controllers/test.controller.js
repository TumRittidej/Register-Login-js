const router = require("express").Router();
const { TestService } = require("../services/test.service");
const testService = new TestService();

// รับ req และส่ง res ไปหน้าบ้าน
router.get("/", async (req, res) => {
  try {
    const test = await testService.getTestList();
    return res.status(200).json({ test });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
