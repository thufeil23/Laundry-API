const verifySign = require('./verifySign');
const verifySignUp = require('./verifySignUp');
const verifyJwtToken = require('./verifyJwtToken');
const role = require('./role');
const laundryType = require('./laundryType');
const paymentType = require('./paymentType');
const order = require('./order');

module.exports = {
    verifySign,
    verifySignUp,
    verifyJwtToken,
    role,
    laundryType,
    paymentType,
    order
};