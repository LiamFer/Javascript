const express = require("express");
const app = express();
const path = require("node:path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded())

app.use(express.static("public"));
const storedUsers = []

app.get("/", (req, res) => {
    const message = "Message Test"
  res.render("index",{message});
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/register",(req,res)=>{
    const username = req.body.username
    storedUsers.push(username)
    console.log(storedUsers)
    res.redirect("/usuarios")
}
)

app.get("/usuarios", (req, res) => {
  res.render("index");
});

app.listen(3000);
