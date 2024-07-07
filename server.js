
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

app.set("view engine", "ejs");
app.set("views", __dirname + '/views');
app.set("layout ", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connect;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to dealer, waiting further instructions..."));
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);