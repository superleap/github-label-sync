let config = require('./config');
let {user, repo, token, options} = config.github;
let labels = require('./config/labels');
let githubSync = new (require('./../lib/GithubSync'))(options, user, repo, token);

githubSync.deleteLabels(labels).then((response) => {
    console.log(response);
    console.log(githubSync.deletedLabels);
});
