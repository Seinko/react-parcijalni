function fetchData(user, setData, setError) {
    return fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => setError(error.toString()));
}

function fetchRepos(user, setRepos, setError) {
return fetch(`https://api.github.com/users/${user}/repos`)
    .then((response) => response.json())
    .then((repos) => setRepos(repos))
    .catch((error) => setError(error.toString()));
}

export { fetchData, fetchRepos };
