const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const port = process.env.PORT || 8080;
const app = express();


const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

  const db = require('./models');
  db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to the database succesfully!");
    });
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });
