const User = require("../models/User");
const bcrypt = require("bcrypt");

// /auth/join 으로 post 요청이 들어올경우 실행될 로직
exports.join = async (req, res, next) => {
  const { nickname, email, password } = req.body;
  try {
    // 해당 email이나 nickname으로 이미 가입되어있는 user 가 있는지 확인
    const exUser = await User.findOne({
      $or: [{ email }, { nickname }],
    });
    if (exUser) {
      // 존재한다면 redirect 로 error qurey 보내줌
      return res.redirect("/join?error=existUser");
    }
    const hashedPassword = await bcrypt.hash(password, 12); // 숫자 높을수록 보안에 좋지만 속도가 느려지므로 적정값 12 사용

    const savedUser = await User.create({
      email,
      nickname,
      password: hashedPassword,
    });

    console.log(savedUser);
    return res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.login = (req, res, next) => {
  res.send("login");
};

exports.logout = (req, res, next) => {
  res.send("logout!!");
};
