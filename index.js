const express = require('express');
const path = require('path');
const hbs = require("hbs");
//---------------------------------
const app = express();
//--------------------------------- Connect Through Browser Engine Handler
const staticpath = path.join(__dirname, "../public")
const partialpath = path.join(__dirname , "/temp/partials")
app.use(express.static(staticpath));
hbs.registerPartials(partialpath);
//---------------------------------
app.set("views", path.join(__dirname, "/temp/views"));
app.set("view engine", "hbs");
//--------------------------------- Page Routing
app.get("/", (req, res) => {
    res.render("index", {
        msg : "Smart-Wheather"
    });
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.get("*", (req, res) => {
    res.render("404");
})
//--------------------------------- Creating Server
app.listen(8003, () => {
    console.log("Port Running Successfully ")
})