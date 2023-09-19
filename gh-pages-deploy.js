import {publish} from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:toniweser/tobi-weber-landingpage.git', // Update to point to your repository
        user: {
            name: 'Tobias Weber', // update to use your name
            email: 'tobiweber87@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);