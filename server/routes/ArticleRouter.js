const express = require("express");
const articleController = require("../controllers/articleController");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const uploads = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, "../client/public/images");
        },
        filename(req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/", uploads.array("pictures", 5), articleController.createArticle);

router.get("/:articleId", articleController.readArticle);

router.patch('/:articleId', uploads.array("pictures", 5), articleController.updateArticle);

router.delete("/:articleId", articleController.deleteArticle);

module.exports = router;