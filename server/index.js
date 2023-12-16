// express 서버
const express = require("express");
const app = express();
const port = 7676;

//routes 불러오기
const authRouter = require("./routes/AuthRouter");
const routineRouter = require("./routes/RoutineRouter");
const articleRouter = require("./routes/ArticleRouter");
const searchRouter = require("./routes/SearchRouter");
const profileRouter = require("./routes/profileRouter");

// MongoDB 연결
const mongoose = require("mongoose");
const dbKey = require("./config/dev");

app.use(express.json());

mongoose
  .connect(dbKey.mongoURI, { dbName: "enough-weight" })
  .then(() => {
    console.log("MongoDB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: false }));

app.get("/main", (req, res) => {
  res.send("HI");
});

// auth 경로로 오는 모든 http 요청은 authRouter를 사용!
app.use("/auth", authRouter);
app.use("/routine", routineRouter);
app.use("/article", articleRouter);
app.use("/search", searchRouter);
app.use("/profile", profileRouter);

app.listen(port, () => {
  console.log(`${port} connected.`);
});
