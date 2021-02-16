async function FetchGit() {
    const url: string = 'https://api.github.com/users/drammaster/repos';
    let repos: any[] = [];

    await fetch(url).then(res => res.json()).then(data => repos.push(data))

    return repos
}

export default FetchGit;