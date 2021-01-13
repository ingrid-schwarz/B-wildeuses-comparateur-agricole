const express = require('express');
const cors = require('cors');
const Router = require('./routes');
const {inTestEnv, SERVER_PORT}= require('./env');
const { Module } = require('module');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//api
app.use('/api', Router);

//server setup
const server = app.listen(SERVER_PORT, ()=> {
    if(!inTestEnv){
        console.log(`server running on port ${SERVER_PORT}`);
    }
});

module.exports = server;