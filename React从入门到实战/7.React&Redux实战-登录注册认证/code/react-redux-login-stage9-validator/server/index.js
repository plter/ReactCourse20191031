const express = require("express");
const app = express();
const users = require("./routes/users")
const debug = require("debug")("my-application");
const bodyParser = require("body-parser")


app.use(bodyParser.json());
app.use("/api/users",users);

app.listen(3030,(req,res) =>{
    debug("服务器运行在3030端口上");
})