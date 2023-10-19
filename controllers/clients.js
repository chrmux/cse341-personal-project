const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllClient = async (req, res) => {
  const result = await mongodb.getDb().db().collection('clients').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleClient = async (req, res) => {
  const clientId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('clients').find({ _id: clientId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createClient = async (req, res) => {
  const client = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email_address: req.body.email_address,
    phoneNumber: req.body.phoneNumber,
    street_address: req.body.street_address,
    city: req.body.city
  };
  const response = await mongodb.getDb().db().collection('clients').insertOne(client);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the client.');
  }
};

const updateClient = async (req, res) => {
  const clientId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const client = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email_address: req.body.email_address,
    phoneNumber: req.body.phoneNumber,
    street_address: req.body.street_address,
    city: req.body.city
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('clients')
    .replaceOne({ _id: clientId }, client);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the client.');
  }
};

const deleteClient = async (req, res) => {
  const clientId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('clients').remove({ _id: clientId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the client.');
  }
};

module.exports = {
  getAllClient,
  getSingleClient,
  createClient,
  updateClient,
  deleteClient
};
