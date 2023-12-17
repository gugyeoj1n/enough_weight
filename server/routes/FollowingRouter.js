const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const { following } = require("../controllers/FollowingController");

// router 를 따로 냅둬서 추후에 유지보수나 scalability 의 편리함 생각
router.post("/follow", isLoggedIn, following);

module.exports = router;
