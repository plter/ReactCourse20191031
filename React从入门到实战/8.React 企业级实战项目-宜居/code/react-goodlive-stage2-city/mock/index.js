var express = require("express");
var app = express();
var router = require("./router.js");

app.use("/api",router);

app.listen(3002,function(){
    console.log(3002);
})