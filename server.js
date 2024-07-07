
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');

app.set("view engine", "ejs");
app.set("views", __dirname + '/views');
app.set("layout ", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/mybrary");
// const db = mongoose.connect;
console.log("Connected to dealer");
// db.on("error", error => console.error(error));
// db.once("open", () => console.log("Connected to dealer, waiting further instructions..."));
app.use("/", indexRouter);
app.use("/authors", authorRouter);

app.listen(3000);