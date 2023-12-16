const express = require("express");
const router = express.Router();

const { searchUser } = require('../controllers/SearchController');

router.get('/', searchUser);

module.exports = router;