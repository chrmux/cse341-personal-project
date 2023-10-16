const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clients');

router.get('/', clientsController.getAllClient);

router.get('/:id', clientsController.getSingleClient);

router.post('/', clientsController.createClient);

module.exports = router;
