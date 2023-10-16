const mongodb = require('../db/db_connect');
const ObjectId = require('mongodb').ObjectId;

// Get Data Models

// Get all cars
const getAllCar = async (req, res) => {
    const result = await mongodb.getDb().db().collection('cars').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

// Get single car by ID
const getSingleCar = async (req, res) => {
    const carId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('cars').find({ _id: carId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };
// Add a new car
const createCar = async (req, res) => {
    const car = {
        make: req.body.make,
        model: req.body.model,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        color: req.body.color,
        stock: req.body.stock
    };
    const response = await mongodb.getDb().db().collection('cars').insertOne(car);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the car.');
    }
  };

// Update an existing car
const updateCar = async (req, res) => {
    const carId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const car = {
      make: req.body.make,
      model: req.body.model,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      color: req.body.color,
      stock: req.body.stock

    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('car')
      .replaceOne({ _id: carId }, car);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the car.');
    }
  };

// Delete a car
const deleteCar = async (req, res) => {
    const carId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .deleteOne({ _id: carId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the car.');
    }
  };
  
  module.exports = {
    getAllCar,
    getSingleCar,
    createCar,
    updateCar,
    deleteCar
  };









