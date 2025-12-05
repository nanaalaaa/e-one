require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

console.log(`Process::`, process.env);

//init middleware
app.use(morgan('dev')); // log request
// morgan("combined") // log request in a more detailed format
// morgan("common")
// morgan("short")
// morgan("tiny")
app.use(helmet()); // secure the app by setting various HTTP headers 
app.use(compression()); // compress the response body

//init db
require('./dbs/init.mongodb.lv0');
const { checkOverload } = require('./helpers/check.connect');
checkOverload();

// init routes
app.get('/', (req, res, next) => {
    // const strCompress = 'Hello World';
    return res.status(200).json({
        message: "Welcome Fantips!",
        // metadata: strCompress.length,
    });
  }
); 
//handling error

module.exports = app;