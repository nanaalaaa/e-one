"use strict";

const mongoose = require("mongoose");
const {db : {host, port, name}} = require('../configs/config.mongodb');
const connectString = `mongodb://${host}:${port}/${name}`;

const { countConnect} = require('../helpers/check.connect');

// mongoose
//   .connect(connectString)
//   .then((_) => console.log("Connected to MongoDB"))
//   .catch((err) => console.log("Error connecting to MongoDB", err));

  class Database {
    constructor() {
        this.connect();
    }
  }

  //connect
  connect = () => {
      if (1 === 1) {
        mongoose.set("debug", true); // in lai nhung hoat dong khi query database
        mongoose.set("debug", { color: true });
      } 
    mongoose.connect(connectString)
    .then((_) => console.log(`Connected to MongoDB`, countConnect()))
    .catch((err) => console.log("Error connecting to MongoDB", err));
  }

    getInstance = () => {
    if (!Database.instance) {
        Database.instance = new Database();
    }
    return Database.instance;
}

const instanceMongoDB = Database.getInstance();

module.exports = instanceMongoDB;