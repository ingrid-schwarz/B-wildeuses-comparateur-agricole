require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mainRoutes = require('./routes');



//const { Module } = require('module');
const SERVER_PORT=process.env.SERVER_PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', mainRoutes);



//server setup
app.listen(SERVER_PORT, ()=> {
    console.log(`server running on port ${SERVER_PORT}`);

});
