const jwt = require("jsonwebtoken");
let users = require("../models/userModel");
const secret_key = "dasjqwid12912389";

const isAdmin = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    try {
      const token = jwt.verify(auth.split(" ")[1], secret_key);
      const user = users.find((u) => u.email == token.email);
      if (user) {
        req.authenticatedUser = user;
        if (user.papel == "Administrador") {
          return next();
        }
      }
      return res.status(401).json({ message: "Acesso Negado" });
    } catch (error) {
      return res.status(401).json({ message: "Token Inválido" });
    }
  }
  return res.status(401).json({ message: "Acesso Negado" });
};

const authGuard = (req, res, next) => {
  const auth = req.headers.authorization;
  console.log(auth);
  if (auth) {
    try {
      const token = jwt.verify(auth.split(" ")[1], secret_key);
      const user = users.find((u) => u.email == token.email);
      if (user) {
        console.log(user)
        req.authenticatedUser = user;
      }
    } catch (error) {}
  }
  return next();
};

module.exports = { isAdmin, authGuard };
