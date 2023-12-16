const express = require("express");
const router = express.Router();
const { join, login, logout } = require("../controllers/AuthController");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");

// /auth/join 으로의 post 요청
router.post("/join", isNotLoggedIn, join);
router.post("/login", isNotLoggedIn, login);
router.get("/logout", isLoggedIn, logout);

module.exports = router;