const express = require("express");

const app = express();

const hbs = require("hbs");

app.use(express.static("public"));

app.set("view engine", "hbs");

//username and password

const username = "predefined";

const password = "predefined123";




app.get("/", (req, res) => {
  res.render("login");
});

app.listen(3003, () => console.log("server running on port 3003"));
