const express = require("express");
const router = express.Router();
const { join, login, logout, user } = require("../controllers/AuthController");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");

// /auth/join 으로의 post 요청
router.post("/join", isNotLoggedIn, join);
router.post("/login", isNotLoggedIn, login);
router.get("/logout", isLoggedIn, logout);

router.get("/test", isLoggedIn); //로그인 테스트용
router.get('/user', user);

module.exports = router;
