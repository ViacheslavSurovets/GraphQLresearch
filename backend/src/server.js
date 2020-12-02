"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("config"));
var db_1 = __importDefault(require("@db/db"));
db_1.default();
var app = express_1.default();
// app.use('/graphql', graphqlHTTP({
// }))
app.use(body_parser_1.json());
app.use(cors_1.default());
var PORT = config_1.default.get('app.port');
app.listen(PORT || 5000, function () { return console.log("Server runs on port -- " + PORT); });
