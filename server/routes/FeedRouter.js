const express = require("express");
const router = express.Router();
const { showFeed } = require("../controllers/FeedController");

router.get('/', showFeed);

module.exports = router;