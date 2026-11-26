const express = require ("express");
const app =  express();
const mongoose = require ("mongoose");


app.set("view engine", "ejs");
app.use(express.static('public')); 

app.get("/",(req,res)=>{
    res.render('layouts/boilerplate');
})

app.listen(8080, ()=>{
    console.log("app is listening to port 8080");
});