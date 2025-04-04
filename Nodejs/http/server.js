const express = require("express");
const app = express();
const path = require("node:path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

app.use(express.static("public"));
const storedEmails = [];

app.get("/", (req, res) => {
  res.render("cadastro");
});


app.get("/registrados", (req, res) => {
  res.render("registrados",{emails:storedEmails});
});

app.post("/register", (req, res) => {
  storedEmails.push(req.body.email);
  res.render("sucesso");
});

app.listen(3000);
