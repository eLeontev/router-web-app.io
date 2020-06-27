const ghpages = require('gh-pages');

ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/eLeontev/router-web-app.io.git',
    },
    () => {
        console.log('Deploy Complete!');
    }
);
