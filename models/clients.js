  module.exports = (mongoose) => {
    const Client = mongoose.model(
      'temples',
      mongoose.Schema(
        {
          first_name: String,
          last_name: String,
          email_address: String,
          phoneNumber: String,
          street_address: String,
          city: String,
        },
        { timestamps: true }
      )
    );
  
    return Client;
  }