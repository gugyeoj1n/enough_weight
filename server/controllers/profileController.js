const routine = require('../models/Routine');
const article = require('../models/Article');

exports.showProfile = async (req, res, next) => {
    try {
        // const userId = req.user.id;
        const userId = '657d5ca3c8ae61743138fbfa'; // 테스트용 데이터

        const userArticles = await article.find({ "author.id" : userId }).exec();

        const userRoutines = await routine.find({ "author.id" : userId }).exec();

        res.json({
            userArticles,
            userRoutines,
        });
    } catch (error) {

    }
}