require("dotenv/config");
const express = require("express");
const mongooseConnection = require("./data/mongoConnect")

const app = express();


mongooseConnection()

app.listen(process.env.PORT, ()=>{
    console.log("Backend server is running!");
})