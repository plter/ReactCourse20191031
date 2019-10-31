"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var options = {
    headers: {
        'User-Agent': "request"
    },
    json: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName, options, function (error, response, body) {
            // let user:User = new User(JSON.parse(body));
            var user = new User_1.User(body);
            cb(user);
        });
    };
    GithubApiService.prototype.getRepos = function (userName, cb) {
        request.get("https://api.github.com/users/" + userName + "/repos", options, function (error, response, body) {
            var repo = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repo);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
