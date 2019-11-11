const express = require("express");
const helmet = require("helmet");


const carRouter = require('./resources/routers/carRouters');


const server = express();

server.use(helmet());

server.use(express.json())

server.use("/cars", logger, carRouter);

server.get("/", logger, (req, res) => {
    res.send(`<h2>go to /cars to hit actual endpoints! </h2>`);
  });


function logger(req, res, next) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.host}`
    );
  
    next();
  }
module.exports = server;