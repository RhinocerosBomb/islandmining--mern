/**
 * index.js routes is the home to unspecific routes
 */
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    let loggedIn = false;
    let username;
    if (req.isAuthenticated()) {
        loggedIn = true;
        username = req.user.username
    }
    res.json({
        data: [{
            
        }]
    })
    res.render('index', { username: username, loggedIn: loggedIn });
});

// Mailchimp signup form
router.post('/signup', (req, res) => {
    const { email } = req.body
    if (!email) {
        res.send('input left empty');
        return;
    }
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed'
            }
        ]
    }
    const postData = JSON.stringify(data);
    const options = {
        url: 'https://us20.api.mailchimp.com/3.0/lists/59f6b8c7f9',
        method: 'POST',
        headers: {
            'Authorization': 'auth aeb75e17e41474a051af3a72db9f84c6-us20'
        },
        body: postData
    }
    request(options, (err, response, body) => {
        if (err) {
            res.redirect('/fail.html');
            console.log('req err', err);
        } else {
            if (response.statusCode === 200) {
                res.send('subscribed!');
            } else {
                res.send('failed')
            }
        }
    });
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

module.exports = router;