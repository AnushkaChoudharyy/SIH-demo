const express = require ("express");
const app =  express();
const mongoose = require ("mongoose");

app.get("/",(req,res)=>{
    res.send("hi this is root!");
})

app.listen(8080, ()=>{
    console.log("app is listening to port 8080");
});