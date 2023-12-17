const User = require("../models/User");

exports.following = async (req, res, next) => {
  const { id } = req.body;
  console.log(id);

  const followingUser = await User.findOne({ id });

  const query1 = { _id: req.user.id };
  const update1 = { $push: { following: id } };
  const query2 = { _id: id };
  const update2 = { $push: { follower: req.user.id } };

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
