const express = require('express')
const router = express.Router()
const { createArticle, updateArticle, readArticle, deleteArticle } = require("../controllers/ArticleController")

// URL 지정 필요

module.exports = router