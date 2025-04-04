const uuid = require("uuid").v4;
const bcrypt = require("bcrypt");

const users = [
  {
    id: "1",
    name: "Isaac Pontes",
    email: "isaac@email.com",
    password: "123456",
  },
  { id: "2", name: "John Doe", email: "john@email.com", password: "0000" },
];

module.exports = {
  getAllUsers: () => users,
  getUserById: (id) => users.find((u) => u.id == id),
  getUserByEmail: (email) => users.find((u) => u.email == email),
  createUser: (name, email, password) => {
    const newUser = {
      id: uuid(),
      name,
      email,
      password: bcrypt.hashSync(password, 7),
    };
    users.push(newUser);
    return newUser;
  },
};
