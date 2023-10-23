const dbConfig = require('../db/db_config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.clients = require('./clients-model.js')(mongoose);
//db.cars = require('./cars.js')(mongoose);

module.exports = db;