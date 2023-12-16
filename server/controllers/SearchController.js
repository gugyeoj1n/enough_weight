const user = require('../models/User');

exports.searchUser = async (req, res, next) => {
    try {
        const searchTerm = req.query.nickname;

        if (!searchTerm) {
            return res.json([]);
        }

        const regex = new RegExp(searchTerm, 'i');
        const users = await user.find({ nickname: regex }).exec();
        res.json(users);

    } catch (error) {
        throw error;
    }
};

