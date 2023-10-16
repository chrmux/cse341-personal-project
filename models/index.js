const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.projects = require("./cars.js")(mongoose);
db.users = require("./clients.js")(mongoose);

module.exports = db;
