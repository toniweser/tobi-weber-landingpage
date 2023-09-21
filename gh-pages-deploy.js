import {publish} from 'gh-pages';

publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'git@github.com:toniweser/tobi-weber-landingpage.git',
        user: {
            name: 'Tobias Weber',
            email: 'tobiweber87@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
