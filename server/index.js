// express 서버
const express = require("express");
const app = express();
const port = 7676;

//로그인 관련 사용할 모듈들 불러오기
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const passportConfig = require("./passport");
passportConfig();

//Auth관련 routes 불러오기
const authRouter = require("./routes/AuthRouter");

// MongoDB 연결
const mongoose = require("mongoose");
const dbKey = require("./config/dev");

mongoose
  .connect(dbKey.mongoURI, { dbName: "enough-weight" })
  .then(() => {
    console.log("MongoDB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

// 프론트에서 전송된 데이터를 해석(parse)하여 서버에서 사용할 수 있도록 해줌.
// req.body 안에 name 속성의 이름으로 값을 parse
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "SECRETKEY",
    resave: false, // 세션 데이터 변경 안되면 저장소에 저장 X -> 성능 up
    saveUninitialized: false, // 초기화 되지 않은 세션 저장소에 저장 X -> 성능 up
    cookie: {
      httpOnly: true, // 브라우저의 js 에서 세션 쿠키에 접근 X -> 보안 up
      secure: false, // 쿠키가 https 연결에서만 전송되어야 함 -> 개발 중에는 사용 X
    },
  })
);

app.use(passport.initialize()); // passport 사용한다고 express 에 알림 (req.user, req.login, req.isAuthenticate 등등이 만들어짐)
app.use(passport.session()); // session 을 이용하여 passport 를 동작한다

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/main", (req, res) => {
  res.send("HI");
});

// auth 경로로 오는 모든 http 요청은 authRouter를 사용
app.use("/auth", authRouter);

app.post("/api/test", (req, res) => {
    console.log(req.body.userId)
    res.send("HI")
})

app.listen(port, () => {
  console.log(`${port} connected.`);
});
