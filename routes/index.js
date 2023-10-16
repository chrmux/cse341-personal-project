const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/clients', require('./clients'));
router.use('/cars', require('./cars'));


module.exports = router;
