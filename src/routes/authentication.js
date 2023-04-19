const express = require('express');
const router = express.Router();
const passport = require('passport');
var GoogleStrategy = require('passport-google-oidc');

const pool = require('../database');

passport.use(new GoogleStrategy({
        clientID: process.env['GOOGLE_CLIENT_ID'],
        clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
        callbackURL: '/oauth2/redirect/google',
        scope: [ 'profile' ]
    }, async function verify(issuer, profile, cb) {
        const rows = await pool.query('SELECT * FROM users WHERE id_user = ?', [profile.id])
        
        if(rows.length == 0) {
            await pool.query('INSERT INTO users (id_user, display_name, issuer) VALUES (?, ?, ?)', [
                profile.id,
                profile.displayName,
                issuer
            ])
        } 
        var user = {
            id: profile.id,
            name: profile.displayName
        }
        return cb(null, user)
    }
));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, username: user.username, name: user.name });
    });
});
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});


router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/login/federated/google', passport.authenticate('google'));

router.get('/oauth2/redirect/google', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
}));


router.post('/logout', function(req, res, next) {
    req.logOut();
    res.redirect('/login');
});

module.exports = router;