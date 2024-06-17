const router = require('express').Router();
const email = require('./email')

router.use('/emails', email);

module.exports = router;