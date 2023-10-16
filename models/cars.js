module.exports = (mongoose) => {
  const Car = mongoose.model(
    'cars',
    mongoose.Schema(
      {
      make: String,
      model: String,
      description: String,
      image: String,
      price: String,
      color: String,
      stock: String,
    },
    { timestamps: true }
    )
    );
  
    return Car;
  }