export default async function (output, _hist, ...args) {
  if (args.length) {
    const name = args[0];
    output.innerHTML += '<span data-color="orange">Opening Github...</span>';
    window.open('https://github.com/amanraox/' + name);
  } else {
    let repositories;
    try {
      repositories = await fetch(
        "https://api.github.com/users/amanraox/repos?type=owner&sort=created"
      ).then((r) => r.json());
    } catch (e) {
      output.innerHTML += '<span data-color="red">' + e + "</span>";
      return;
    }

    const nonForkedRepositories = repositories
      .filter((repo) => !repo.fork)
      .slice(0, 20);

    const repositoriesInfo = nonForkedRepositories.map((repo) => ({
      name: repo.name,
      description: repo.description,
      link: repo.html_url,
      stars: repo.stargazers_count,
    }));

    repositoriesInfo.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    output.innerHTML += '\n';

    repositoriesInfo.forEach((repo) => {
      output.innerHTML += `\<span data-color="00ff99"><a href="${repo.link}">${repo.name}</a></span> <span data-color="#00ff99">${repo.stars}</span> <span data-color="grey">|==>></span> ${repo.description}\n`;
    });

    output.innerHTML += `
Checkout more Awesome Projects on my <span data-color="cyan"><a href="https://github.com/amanraox?tab=repositories">Github</a></span>\n
`;
  }
}
