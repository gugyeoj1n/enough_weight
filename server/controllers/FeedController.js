const article = require('../models/Article');
const routine = require('../models/Routine');
const User = require("../models/User");
const {following} = require("./FollowingController");

exports.showFeed = async (req, res, next) => {
    try {
        console.log(req.user);
        const userNickname = req.user.nickname;

        const followings = (await User.findOne({ nickname: userNickname }))?.following || [];

        console.log(followings);

        const articles = await article.find({ 'author': { $in: followings } });

        const routines = await routine.find({ 'author': { $in: followings } });

        const followingContent = {
            routines,
            articles
        };

        res.status(200).json(followingContent);
    } catch (error) {
        next(error);
    }
}
