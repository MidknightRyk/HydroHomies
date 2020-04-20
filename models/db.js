require('dotenv').config()
const mongoose = require('mongoose');

// copy from CONNECT (MongoDB Atlas)
const dbURI =
  'mongodb+srv://HydroHomies:<password>@hydrohomies-u3qcl.mongodb.net/test?retryWrites=true&w=majority';

var dbURL =
  dbURI.replace('<password>', process.env.MONGO_PASSWORD);

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: 'Databace'
};

mongoose.connect(dbURL, options).then(
  () => {
    console.log('Database connection established!');
  },
  err => {
    console.log('Error connecting Database instance due to: ', err);
  });

// Initializes the schema for mongodb
require('./user.js');
