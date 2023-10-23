//const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const Client = require('../models/clients-model');

const getAllClient = async (req, res) => {
  try {
		const result = await Client.find();
		res.setHeader('Content-Type', 'application/json');
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json(err.message);
		res.status(401);
	}
};

const getSingleClient = async (req, res) => {
  const email_address = req.params.email_address;
  Client.findOne({ email_address: email_address })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

const createClient = async (req, res) => {
  const client = new Client({
    email_address: req.body.email_address,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phoneNumber: req.body.phoneNumber,
    street_address: req.body.street_address,
    city: req.body.city
  });
  try {
    const savedClient = await client.save();
    res.json({ error: null, data: savedClient._id });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateClient = async (req, res) => {
  const clientId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const client = {
    email_address: req.body.email_address,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phoneNumber: req.body.phoneNumber,
    street_address: req.body.street_address,
    city: req.body.city
  };
  const response = await Client
    .replaceOne({ _id: clientId }, client);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the client.');
  }
};

const deleteClient = async (req, res) => {
  await Client.deleteOne({ "email_address": req.body.email_address}).then(() => {
    res.status(200).send({ message: 'Client deleted'})
  })
};

module.exports = {
  getAllClient,
  getSingleClient,
  createClient,
  updateClient,
  deleteClient
};
