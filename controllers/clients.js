const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const Clients = require('../models/clients-model');
const handleErrors = require('../helper/handleErrors');

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
  try {
		const client = new Clients({
			first_name: req.body.first_name,
      last_name: req.body.last_name,
      email_address: req.body.email_address,
      phoneNumber: req.body.phoneNumber,
      street_address: req.body.street_address,
      city: req.body.city,
		});

		const response = await client.save();
		res.status(201).json(response);

	} catch (err) {
		const errors = handleErrors(err);
		res.status(500).json({ errors });
		res.status(400);
	}
};


const updateClient = async (req, res) => {
  try {
		if (!ObjectId.isValid(req.params.id)) {
			res.status(400).json('Client ID is not a valid Mongo ID');
		}
		const clientId = new ObjectId(req.params.id);
		const updatedClient = {
			first_name: req.body.first_name,
      last_name: req.body.last_name,
      email_address: req.body.email_address,
      phoneNumber: req.body.phoneNumber,
      street_address: req.body.street_address,
      city: req.body.city,
		};

		const response = await Clients
			.findOneAndUpdate({ _id: clientId }, updatedClient, {
				runValidators: true,
				new: true,
			});

		if (response) {
			res.status(204).send();
		}
	} catch (err) {
		const errors = handleErrors(err);
		res.status(500).json({ errors });
		res.status(400);
	}
};

const deleteClient = async (req, res) => {
  const clientId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('clients').remove({ _id: clientId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
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
