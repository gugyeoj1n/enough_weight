exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    // passport 통해서 로그인했는지를 알려줌
    next();
  } else {
    return res.send({ success: false });
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태입니다.");
    return res.send({ success: true });
  }
};
