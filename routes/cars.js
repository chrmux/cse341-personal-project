const express = require('express');
const router = express.Router();

const carsController = require('../controllers/cars');

router.get('/', carsController.getAllCar);

router.get('/:id', carsController.getSingleCar);

router.post('/', carsController.createCar);


module.exports = router;
