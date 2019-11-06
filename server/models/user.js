var mongoose                = require('mongoose'),
    passportLocalMongoose   = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    username        : String,
    firstName       : String,
    lastName        : String,
    phone           : String,
    password        : String,
    address         : String,
    city            : String,
    phone           : String,
    citizenship     : String,
    citizenship_2   : String,
    residency       : String,
    verified: {
        type    : String,
        default : 'false'
    },
    affiliatePermissions: {
        type: Boolean,
        default: false
    },
    userIndex       : String,
    prices          : String,
    bitcoinAddress  : String,
    ethereumAddress : {
        type: String,
        default: null
    },
    referrals: {
        type: Number,
        default: 0, 
    },
    referralAddress : String,

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

