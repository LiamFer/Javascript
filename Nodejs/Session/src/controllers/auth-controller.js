let users = [{ username: "will", password: "123456" }];

module.exports = {
  index: (req, res) => {
    res.render("index");
  },
  register: (req, res) => {
    const { username, password } = req.body;
    const userAlreadyExists = users.find((u) => u.username == username);
    if (userAlreadyExists) {
      return res.status(400).redirect("/");
    }
    users.push({ username, password });
    res.redirect("/dashboard");
  },

  login: (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username == username);
    if (!user) return res.redirect("/");
    if (user.password !== password) return res.redirect("/");

    req.session.authenticated = true;
    req.session.currentUser = user;

    res.redirect("/dashboard");
  },
};
