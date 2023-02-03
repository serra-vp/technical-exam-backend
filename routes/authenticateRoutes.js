const express = require("express");
const router = express.Router();
const authenticateServices = require("../services/authenticateServices");

router.post("/login", async (req, res, next) => {
  try {
    const response = await authenticateServices.userLogin(req.body);
    res
      .status(response.status)
      .json({
        success: true,
        message: response.message,
        token: response.token
      });
  } catch (err) {
    console.error(`Error in ${req.url} ||`, err.message);
    res
      .status(500)
      .json({
        success: false,
        message: "An error occurred. Please try again",
      })
      .end();
  }
});

module.exports = router;
