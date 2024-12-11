const GITURL = "https://api.github.com/users/";
const users = [];
async function getUser(username) {
    const user = await fetch(GITURL + username).then((response) => response.json());
    const { id, login, name, bio, public_repos, repos_url } = user;
    const userData = { id, login, name, bio, public_repos, repos_url };
    console.log(userData);
    users.push(userData);
    return userData;
}
async function getRepos(user) {
    const repositories = await fetch(user.repos_url).then((result) => result.json());
    let repos = repositories.map(({ name, description, fork, stargazers_count }) => ({
        name,
        description,
        fork,
        stargazers_count,
    }));
    return repos;
}
function calculateRepositories() {
    const totalAmount = users.reduce((s, v) => s + v.public_repos, 0);
    console.log(totalAmount);
}
getUser("LiamFer").then((result) => {
    getRepos(users[0]);
});
getUser("LiamFer").then((result) => {
    getRepos(users[0]);
});
