const express = require("express");
let users = require("../models/userModel");
const { isAdmin, authGuard } = require("../middlewares/auth-middleware");
const userRoute = express.Router();
const jwt = require("jsonwebtoken");

const secret_key = "dasjqwid12912389";

userRoute.get("/", authGuard, (req, res) => {
  res.json(
    `Boas Vindas ${
      req.authenticatedUser ? req.authenticatedUser.nome : "Visitante"
    }`
  );
});

userRoute.post("/register", (req, res) => {
  const { nome, email, senha } = req.body;
  if (users.find((u) => u.email == email))
    res.status(400).json({ message: "Email já está em uso" });

  users.push({ nome, email, senha, papel: "Usuário Padrão" });
  res.status(201).json({ message: "Usuário Criado!" });
});

userRoute.post("/login", (req, res) => {
  const { email, senha } = req.body;
  const user = users.find((u) => u.email == email && u.senha == senha);
  if (user) {
    const token = jwt.sign({ email }, secret_key, { expiresIn: "1h" });
    return res.status(201).json(token);
  }
  return res.status(404).json({ message: "Credenciais Incorretas!" });
});

// Autenticadas
userRoute.get("/users", isAdmin, (req, res) => {
  res.json(users);
});

userRoute.put("/users/admin/:email", isAdmin, (req, res) => {
  const index = users.findIndex((u) => u.email == req.params.email);
  if (index != -1) {
    users[index].papel = "Administrador";
    return res.status(200).json({ message: "Usuário agora é um admin!" });
  }
  return res.status(404).json({ message: "Usuário não encontrado!" });
});

userRoute.get("/users/:email", isAdmin, (req, res) => {
  const index = users.findIndex((u) => u.email == req.params.email);
  if (index != -1) {
    return res.status(200).json(users[index]);
  }
  return res.status(404).json({ message: "Usuário não encontrado!" });
});

userRoute.delete("/users/:email", isAdmin, (req, res) => {
  const index = users.findIndex((u) => u.email == req.params.email);
  if (index != -1) {
    users = users.filter(u => u.email != req.params.email)
    return res.status(204).json({ message: "Usuário deletado!" });
  }
  return res.status(404).json({ message: "Usuário não encontrado!" });
});

module.exports = userRoute;
