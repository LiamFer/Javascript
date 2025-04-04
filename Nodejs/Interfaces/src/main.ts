const GITURL = "https://api.github.com/users/";
const users: gitUser[] = [];

interface gitUser {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
}

interface repository {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
}

async function getUser(username: string) {
  const user: gitUser = await fetch(GITURL + username).then((response) =>
    response.json()
  );
  const { id, login, name, bio, public_repos, repos_url } = user;
  const userData = { id, login, name, bio, public_repos, repos_url };
  console.log(userData);
  users.push(userData);
  return userData;
}

async function getRepos(user: gitUser) {
  const repositories: repository[] = await fetch(user.repos_url).then(
    (result) => result.json()
  );
  let repos = repositories.map(
    ({ name, description, fork, stargazers_count }) => ({
      name,
      description,
      fork,
      stargazers_count,
    })
  );
  return repos;
}

function calculateRepositories() {
  const totalAmount = users.reduce((s, v) => s + v.public_repos, 0);
  console.log(totalAmount);
}

function showAllUsers() {
  console.log(users);
}

function GETTOP() {
  console.log(users.sort((a, b) => b.public_repos - a.public_repos).slice(0,5))
}

getUser("LiamFer").then((r) => {
  getUser("Jackvs720v").then(r=>GETTOP())
});
