 const express = require('express');
 const router = express.Router();
 const passport = require('passport');
 const GoogleStrategy = require('passport-google-oauth20').Strategy;
 const keys = require('./config/keys');

//  var regx = /^([a-zA-Z])+(.iitr.ac.in)/;

passport.use(
    new GoogleStrategy(
        {
            clientID: '17517916444-hfsdbimcq9sv8hj6i9lgbvg7g506e58m.apps.googleusercontent.com',
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken) => {
            console.log(accessToken);
        }
 )
);

router.get('/auth/google', passport.authenticate('google', {
    hd: 'iitr.ac.in',
    prompt: 'select_account',
    scope: ['email']
}));

 router.get('/', (req, res) => {
    res.send({hi: 'there'});
})

let arr = [];

// router.post('/email', (req, res) => {
//     const email = req.body.email;

//     var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z])+(.iitr.ac.in)/;

//     if(email.match(regx))
//     {
//         console.log("IITR Student");
//     }
//     else{
//         console.log("NOT AN IITR STUDENT");
//     }

//     arr.push(email);
//     console.log(arr);
//     res.redirect('/');
// })

module.exports = router;