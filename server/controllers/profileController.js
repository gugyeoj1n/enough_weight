const routine = require('../models/Routine');
const article = require('../models/Article');

exports.showProfile = async (req, res, next) => {
    try {
        console.log(req.user);
        const userId = req.user.id;

        const userArticles = await article.find({ "author.id" : userId }).exec();

        const userRoutines = await routine.find({ "author.id" : userId }).exec();

        res.json({
            userArticles,
            userRoutines,
        });
    } catch (error) {

    }
}