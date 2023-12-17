const User = require("../models/User");

exports.following = async (req, res, next) => {
  const { nickname } = req.body;
  console.log(nickname);

  const query1 = { nickname: req.user.nickname };
  const update1 = { $push: { following: nickname } };
  const query2 = { nickname: nickname };
  const update2 = { $push: { follower: req.user.nickname } };

  User.updateOne(query1, update1)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });

  User.updateOne(query2, update2)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });

  res.status(200).send();
};
