ghpages.publish('dist', {
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/user/private-repo.git',
  silent: true
}, callback);
