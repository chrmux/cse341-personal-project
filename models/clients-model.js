const mongoose = require('mongoose');

const ClientsSchema = new mongoose.Schema({
    
    email_address: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: (email) => {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
          },
          message: 'Invalid email address',
        },
      },
      password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters'],
      },            
    first_name: {
        type: String,
        required: true,
        min: [3, 'First name should only contain letters'],
    },
    last_name: {
        type: String,
        required: true,
        min: [3, 'First name should only contain letters'],
    },   
    phoneNumber: {
        type: String,
        required: true,
		minlength: [10, 'Minimum phone number length is 10 digits'],
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

module.exports = mongoose.model('Client', ClientsSchema);