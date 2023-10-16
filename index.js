const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongodb = require('./db/db_connect');

const port = process.env.PORT || 8080;
const app = express();
app.options('*', cors())

app
  .use(bodyParser.json())
  .use(cors())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-AllowHeaders", "Origin, X-Requested-With, Content-type, Accept")
    next();
  })
  .use('/', require('./routes'));
  

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
