/**
 * dashboard.js is the logic behind the dashboard page
 */
const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Web3 = require('web3');
const request = require('request')

/**
 * Dashboard route.
 * 
 * Has to verify that user is logged in before loading the page.
 * The route then searches for the logged in user in the database
 * and loads their information. 
 */
router.get('/dashboard', isLoggedIn, async function (req, res) {
    User.findOne({ username: req.user.username }, (err, user) => {
        if (err) console.log('Error finding user:', err)
        res.json({
            data: [{
                username            : user['username'],
                bitcoinAddress      : user['bitcoinAddress'],
                ethereumAddress     : user['ethereumAddress'],
                referrals           : user['referrals'],
                referralAddress     : user['referralAddress'],
            }],
            message: {},
            status: {
                verified: user['verified'],
                affiliatePermissions: user['affiliatePermissions']   
            }
        })
    })
});

// KYC routes
router.get('/kyc', isLoggedIn, function (req, res) {
    // Verifies whichever user loads this route.
    // Imported only to the MVP for demonstration purposes
    User.findOneAndUpdate({ username: req.user.username }, { 'verified': 'true' }, (err) => {
        console.log(err);
    })

    User.findOne({ username: req.user.username }, (err, user) => {
        if (err) console.log(err);

        // Netverify account information
        var username = '';
        var password = '';
        const options = {
            url: 'https://netverify.com/api/v4/initiate',
            method: 'POST',
            json: true,
            body: {
                "customerInternalReference": "JUMIOGENERATED",
                "userReference": user.userIndex,
                "callbackUrl": "https://www.islandmining.io/api/kyc/completed",
            },
            auth: {
                user: username,
                password: password
            },
            headers: {
                "User-Agent": "SMB Redirect/1.0.0",
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }

        // Sends a POST request to Netverify servers
        // then loads KYC page with registration link (redirectUrl)
        request(options, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                res.json({
                    redirectUrl: body.redirectUrl, 
                    username: req.user.username 
                })

            } else {
                // Let the user know our app wasn't able to grab the registration link
                console.log(err);
                res.send('something went wrong')
            }
        });
    })
})

router.post('/kyc/completed', function (req, res) {
    if (req.body.verificationStatus !== 'NO_ID_UPLOADED' && req.body.verificationStatus !== 'ERROR_NOT_READABLE_ID') {
        User.findOneAndUpdate({ userIndex: req.body.customerId }, { verified: 'true' }, (err) => {
            if(err) console.log(err);
        })
    } else {
        User.findOneAndUpdate({ userIndex: req.body.customerId }, { verified: 'failed' }, (err) => {
            if (err) console.log(err);
        })
    }
})

router.post('/verify/user', function (req, res) {
    User.findOneAndUpdate({ username: req.body.username }, { verified: 'true' }, function (err) {
        if(err) console.log(err);
    })

    res.json({
        username: req.body.username
    })
})

/**
 * Verifies legitimacy of inputed Ethereum address
 * 
 * Receives POST request from dashboard page
 * and verifies the address with Web3.
 * If it is a valid address, update user's Ethereum address
 */
router.post('/verify/ethereum', function (req, res) {
    if (Web3.utils.isAddress(req.body.address) === true) {
        User.findOneAndUpdate({ username: req.body.username }, { ethereumAddress: req.body.address }, function (err) {
            if(err) console.log(err);
        })

        res.json({
            username: req.body.username,
            ethereumAddress: req.body.address
        })
    } else {
        res.send('not a valid address')
    }
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;