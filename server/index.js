// express 서버
const express = require("express")
const app = express()
const port = 7676

// MongoDB 연결
const mongoose = require("mongoose")
const dbKey = require("./config/dev")

mongoose.connect(dbKey.mongoURI, { dbName: "enough-weight" })
    .then(() => {
        console.log("MongoDB CONNECTED")
    }).catch(err => {
        console.log(err)
    })

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/main", (req, res) => {
    res.send("HI")
})

app.post("/api/test", (req, res) => {
    console.log(req.body.userId)
    res.send("HI")
})

app.listen(port, () => {
    console.log(`${port} connected.`);
});