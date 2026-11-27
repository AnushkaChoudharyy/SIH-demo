const express = require ("express");
const app =  express();
const ejsMate = require("ejs-mate");
const mongoose = require ("mongoose");
const path = require("path");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));


app.get("/", (req, res) => {
    res.render("tabs/overview");
});

app.listen(8080, ()=>{
    console.log("app is listening to port 8080");
});