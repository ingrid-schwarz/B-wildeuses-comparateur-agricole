require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mainRoutes = require('./routes');
const SERVER_PORT = process.env.SERVER_PORT;
//const { Module } = require('module');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//api
app.use('/api', mainRoutes);


app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
});
