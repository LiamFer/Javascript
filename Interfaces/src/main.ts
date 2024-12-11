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

async function getUser(name: string) {
  const user: gitUser = await fetch(GITURL + name).then((response) =>
    response.json()
  );
  console.log(user);
  users.push(user);
}

async function getRepos(user: gitUser) {
  const repositories: repository[] = await fetch(user.repos_url).then(
    (result) => result.json()
  )
  console.log(repositories.map(v => {v.name,v.description,v.fork,v.stargazers_count}));
}

getUser("LiamFer");
getRepos(users[0])
