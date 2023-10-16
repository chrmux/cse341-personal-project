module.exports = (mongoose) => {
    const clientsSchema = mongoose.Schema({
      first_name: {
        type: String
      },
      last_name: {
        type: String
      },
      email_address: {
        type: String
      },
      phoneNumber: {
        type: String
      },
      street_address: {
        type: String
      },
      city:{
        type: String
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
      { timestamps: true }
    );
  
    return mongoose.model('clients', clientsSchema);
  };