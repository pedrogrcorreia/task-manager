const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()


const winston  = require("winston")
require('winston-daily-rotate-file');
const LokiTransport = require("winston-loki")
 
 
  var transport = new winston.transports.DailyRotateFile({
    level: 'info',
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

  transport.on('rotate', function(oldFilename, newFilename) {
    // do something fun
  });

  var logger = winston.createLogger({
    transports: [
      transport
    ]
  });

logger.info("Hello world!")

// include the express-prom-bundle to your code
const promBundle = require("express-prom-bundle");
// configure promBundle and give it flags
const promMetrics = promBundle({includePath: true});

// include promBundle before your routes that you want to monitor
app.use(promMetrics);

app.use(express.json())

app.use(userRouter)

app.use(taskRouter)

module.exports = app