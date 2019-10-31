/**
 * auth.js routes is the user authentication logic
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user')
const bjs = require('bitcoinjs-lib');
const bip32 = require('bip32');
const xpub = 'xpub6Ci3DHRbomXva9UT2ZFDWwxeUVqw8vox45ofZCDMk5tpA8cQeiExu8BVPYhYbx6chuquywSgXofiSTbLjL9YzvVUC7VEkayTw5igbCCnmky';

router.get('/register', function(req, res) {
    // If user is logged in, send them to the dashboard
    // Else redirect user back to the register page
    if (req.isAuthenticated()) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
});


router.post('/register', async function(req, res) {
    var userIndex = await User.count();
    ++userIndex;

    // Generate specific Bitcoin address from public key
    const { address } = bjs.payments.p2sh({
        redeem: bjs.payments.p2wpkh({
            pubkey: bip32
                .fromBase58(xpub)
                .derive(0)
                .derive(userIndex).publicKey,
        }),
    });

    // Register user logic
    User.register(new User({
        username: req.body.username,
        bitcoinAddress: address,
        userIndex: userIndex,
        referralAddress: Math.floor((Math.random() * 1000000000) + 1)
    }), req.body.password, function(err, user) {
        if (err) {
            res.json({ error: err.message })
        }

        // Referral system logic. 
        // Authenticate new user and send them to the dashboard page
        // then check if they tried to refer themselves
        passport.authenticate('local')(req, res, function() {

            // Updates user if referral address is valid, updates user
            if (req.user.referralAddress !== req.body.referral) {
                User.findOneAndUpdate({ referralAddress: req.body.referral }, { $inc: { referrals: 1 } }, function(err) {
                    if (err) console.log(err);
                })
            } else {
                res.send('Cannot enter your own referral address');
            }
        });

        // Loads user object on completion
        res.json(user);
    });

});

// Login Routes
router.get('/login', function(req, res) {
    if (req.isAuthenticated()) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
        username: req.user.username
    };
    res.json(userInfo);
})


/**
 * User logout logic.
 * 
 * When user logs out, destroy session and clear cookie.
 * User will then be redirected to the login page
 * with a message reminding them they have successfully
 * logged out.
 */
router.post('/logout', function(req, res) {
    if (req.user) {
        req.session.destroy()
        req.logout()
        res.clearCookie('connect.sid', { path: '/' });
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }

})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;