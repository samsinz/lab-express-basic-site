const express = require("express");
const hbs = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/works", (req, res) => {
  res.render("works", { title: "Works" });
});

app.get("/gallery", (req, res) => {
  res.render("gallery", { title: "Photo Gallery" });
});

app.listen(3000);
