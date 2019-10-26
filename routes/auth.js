/**
 * auth.js routes is the user authentication logic
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user')
const bjs = require('bitcoinjs-lib');

router.get('/register', function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/dashboard');
    } else {
        res.render('register');
    }
});

router.post('/register', async function (req, res) {
    var userIndex = await User.count();
    ++userIndex;

    // 
    var { address } = bjs.payments.p2sh({
        redeem: bjs.payments.p2wpkh({
            pubkey: bip32
                .fromBase58(xpub)
                .derive(0)
                .derive(userIndex).publicKey,
        }),
    });

    User.register(new User({
        username: req.body.username,
        bitcoinAddress: address,
        userIndex: userIndex,
        referralAddress: Math.floor((Math.random() * 1000000000) + 1)
    }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render('register');
        }

        passport.authenticate('local')(req, res, function () {
            if (req.user.referralAddress != req.body.referral) {
                User.findOneAndUpdate({ referralAddress: req.body.referral }, { $inc: { referrals: 1 } }, function (err) {
                    console.log(err);
                })
            } else {
                res.send('Cannot enter your own referral address');
            }
            res.redirect('/dashboard');
        });
    });

});

// Login Routes
router.get('/login', function (req, res) {
    if (req.isAuthenticated())
        res.redirect('/dashboard');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
}), function (req, res) { });

// Google login route
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/auth/google/redirect', function (req, res) {
    res.redirect('/dashboard');
})

// Logout route
router.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy(function (err) {
        res.clearCookie('connect.sid');
        if (err) console.log(err);
        res.redirect('/login')
    });
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;