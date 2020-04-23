const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const recipesRouter = require('./recipesRouter');
const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.get('/', (req,res) => {
    res.status(200).json({
        message : '===!!! SERVER RUNNING !!!==='
    })
})

module.exports = server;