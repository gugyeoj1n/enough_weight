const article = require('../models/Article');

exports.createArticle = async (req, res, next) => {
    try {
        const newArticle = await article.create({
            title: req.body.title,
            content: req.body.content,
            author: req.user.nickname,
            pictures: req.files,
        });

        res.json(newArticle);
    } catch (error) {
        next(error);
    }
}

exports.readArticle = async (req, res, next) => {
    try {
        const articleId = req.params.articleId;
        const readArticle = await article.findById(articleId);

        if (!readArticle) {
            return res.status(404).json({ message: "article not found"});
        }

        res.status(200).json(readArticle);
    } catch (error) {
        next(error);
    }
}

exports.updateArticle = async (req, res, next) => {
    try {
        const articleId = req.params.articleId;
        const updatedArticle = await article.findByIdAndUpdate(
            articleId,
            {
                title: req.body.title,
                content: req.body.content,
                pictures: req.files,
            },
            { new: true}
        );


        if (!updatedArticle) {
            return res.status(404).json({ message: "Routine not found"})
        }

        res.status(200).json(updatedArticle);
    } catch (error) {
        next(error);
    }
}

exports.deleteArticle = async (req, res, next) => {
    try {
        const articleId = req.params.articleId;
        const deletedArticle = await article.findByIdAndDelete(articleId);

        if (!deletedArticle) {
            return res.status(404).json({ message: "Article not found"});
        }

        res.status(200).json({ message: 'article deleted successfully' });
    } catch (error) {
        next(error);
    }
}
