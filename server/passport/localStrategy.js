const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email", //req.body.email
        passwordField: "password", //req.body.password
      },
      async (email, password, done) => {
        try {
          const exUser = await User.findOne({ email });

          if (exUser) {
            const isCorrect = await bcrypt.compare(password, exUser.password);
            if (isCorrect) {
              done(null, exUser);
            } else {
              done(null, false, {
                message: "비밀번호가 일치하지 않습니다.",
              }); // 로직상 에러 (비밀번호 일치 X)
            }
          } else {
            done(null, false, { message: "가입되지 않은 회원입니다." }); // 로직상 에러 (가입되어 있지 않은 email 로 로그인)
          }
        } catch (error) {
          console.error(error);
          done(error); // 서버측 에러 (db 쪽이나 서버쪽 문법 관련 에러)
        }
      }
    )
  );
};
