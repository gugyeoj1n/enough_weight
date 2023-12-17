const article = require('../models/Article');
const routine = require('../models/Routine');
const User = require("../models/User");

exports.showFeed = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).populate('following');
        const followingUserIds = user.following.map(followingUser => followingUser._id);

        const routines = await routine.find({ 'author.id': { $in: followingUserIds } });

        const articles = await article.find({ 'author.id': { $in: followingUserIds } });

        const followingContent = {
            routines,
            articles
        };

        res.status(200).json(followingContent);
    } catch (error) {
        next(error);
    }
}
