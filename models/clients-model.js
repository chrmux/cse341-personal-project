const mongoose = require('mongoose');

const ClientsSchema = new mongoose.Schema({
    
    email_address: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },   
    phoneNumber: {
        type: String,
        required: true
    },
    street_address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Clients', ClientsSchema);