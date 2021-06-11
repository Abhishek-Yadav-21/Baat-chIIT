const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

var branch = ['bt.iitr.ac.in', 'ch.iitr.ac.in'];
var k =0;

passport.serializeUser(function(user, callback){
    console.log('serializing user.');
    callback(null, user.id);
});

passport.deserializeUser(function(user, callback){
   console.log('deserialize user.');
   callback(null, user.id);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            for(var i=0; i<branch.length; i++)
            {
                if(profile._json.hd === branch[i]){
                    done(null, profile);
                    break;
                }
                k++;
            }
            if(k===branch.length)
            {
                done(new Error("Wrong domain!"));
            }
        }
 )
);