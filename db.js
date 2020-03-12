const mongoose = require('mongoose');

// copy from CONNECT (MongoDB Atlas)
const dbURI =
'mongodb+srv://HydroHomies:ItYwbp104PVCu5ne@hydrohomies-u3qcl.mongodb.net/test?retryWrites=true&w=majority';

const options = {
	useNewUrlParser: true,
	dbName: 'Databace'
};

mongoose.connect(dbURI, options).then(
 () => {
	console.log('Database connection established!');
},
 err => {
	console.log('Error connecting Database instance due to: ', err);
});
