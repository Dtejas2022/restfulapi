const express = require("express");
const mongoose = require("mongoose");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("app is running");
});

// create a new student
app.post("/students",(req,res)=>{
    res.send("app is running");
});

app.listen(port,()=>{
    console.log(`running on port ${port}`);
});