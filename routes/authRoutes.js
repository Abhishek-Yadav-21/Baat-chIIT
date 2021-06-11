const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        hd: '*',
        prompt: 'select_account',
        scope: ['email', 'profile']
    }));
    
    app.get('/auth/google/callback', 
        passport.authenticate('google', {
        // successRedirect: '/profile',
        failureRedirect: '/fail'
        })
    );
};
