exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    // passport 통해서 로그인했는지를 알려줌
    next();
  } else {
    res.redirect("/login");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태입니다.");
    res.redirect(`/?error=${message}`);
  }
};
