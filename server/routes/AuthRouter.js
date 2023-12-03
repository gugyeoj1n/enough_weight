const express = require("express");
const router = express.Router();
const { join } = require("../controllers/AuthController");

// /auth/join 으로의 post 요청
router.post("/join", join);

module.exports = router;
