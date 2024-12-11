const GITURL = "https://api.github.com/users/";
const users = [];

async function getUser(name) {
  const user = await fetch(GITURL + name).then((response) => response.json());
  console.log(user);
  users.push(user);
}
async function getRepos(user) {
  const repositories = await fetch(user.repos_url).then((result) =>
    result.json()
  );
  console.log(repos);
}
getUser("LiamFer").then((result) => {
  getRepos(users[0]);
});
