const ghpages = require('gh-pages');

ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/eLeontev/router-web-app.git',
    },
    () => {
        console.log('Deploy Complete!');
    }
);
