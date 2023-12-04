const express = require("express");
const router = express.Router();
const { join, login, logout } = require("../controllers/AuthController");

// /auth/join 으로의 post 요청
router.post("/join", join);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
