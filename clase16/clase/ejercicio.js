const express = require('express');
const morgan = require('morgan');
const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({level: 'debug',handleExceptions: true,json: false,colorize: true})],
        exitOnError: false
    });
    logger.stream = {
        write(message) {logger.info(message);},
     };
     morgan.format('combined', '(routes) [:method] :status :url');
     server.use(morgan('combined', {skip(req, res) 
        {
         return res.statusCode >= 400;
        },
        stream: logger.stream,
    }));