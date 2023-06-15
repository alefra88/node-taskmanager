const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://alanef88:a4969a@cluster0.3narixn.mongodb.net/taskDB?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
