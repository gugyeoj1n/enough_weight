const passport = require("passport");
const localStrategy = require("./localStrategy");
const User = require("../models/User");

module.exports = () => {
  passport.serializeUser((user, done) => {
    // 로그인 성공했을 때 유저정보를 session 에 저장
    // user === exUser

    done(null, user.id); // user id 만 추출해서 효율 올림
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then((user) => done(null, user)) // 여기서 찾은 회원을 request.user 에 저장
      .catch((error) => done(error));
  });

  localStrategy();
};
