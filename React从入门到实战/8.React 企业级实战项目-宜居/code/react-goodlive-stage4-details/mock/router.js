var express = require("express");
var router = express.Router();
var config = require("./config.js");
var url = require("url");
var homehot = require("./data/home/hotdata")
var url = require("url");
var searchData = require("./data/search")
var detailsData = require("./data/details")
var commentData = require("./data/comment")

router.get(config.homehot1, function (req, res) {
    // 接受城市作为参数
    var cityName = url.parse(req.url, true).query.city;
    console.log("城市：" + cityName);
    res.send(homehot.hot1)
})

router.get(config.homehot2, function (req, res) {
    // 接受城市作为参数
    var cityName = url.parse(req.url, true).query.city;
    console.log("城市：" + cityName);
    res.send(homehot.hot2)
})

// 搜索接口
router.get("/search",function(req,res){
    // 接受参数:city,searchcontent
    var cityName = url.parse(req.url, true).query.city;
    var searchContent = url.parse(req.url, true).query.content;
    var page = url.parse(req.url, true).query.page;
    console.log("城市："+cityName,"搜索内容："+searchContent,"页码："+page);
    res.send(searchData)
})

// 详情接口
router.get("/details",function(req,res){
    // 接受商品id
    var id = url.parse(req.url, true).query.id;
    console.log("id:"+id);
    res.send(detailsData);
})

// 评论接口
router.get("/comment",function(req,res){
    // 获取商品id
    var id = url.parse(req.url, true).query.id;
    console.log("id:"+id);
    res.send(commentData);
})

module.exports = router;