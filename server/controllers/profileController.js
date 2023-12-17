const routine = require('../models/Routine');
const article = require('../models/Article');

exports.showProfile = async (req, res, next) => {
    try {
        const nickname = req.user.nickname;

        const userArticles = await article.find({ "author" : nickname }).exec();

        const userRoutines = await routine.find({ "author" : nickname }).exec();
        const followers = req.user.follower.length;
        const followings = req.user.following.length;

        res.json({
            followers,
            followings,
            userArticles,
            userRoutines,
        });
    } catch (error) {

    }
}