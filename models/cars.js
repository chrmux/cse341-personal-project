module.exports = (mongoose) => {
    const carsSchema = mongoose.Schema({
      make: {
        type: String
      },
      model: {
        type: String
      },
      description: {
        type: String
      },
      image: {
        type: String
      },
      price: {
        type: String
      },
      color: {
        type: String
      },
      stock: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
    { timestamps: true }
  );
  
    return mongoose.model('cars', carsSchema);
  };