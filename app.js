var express = require('express');
var app = express();
var path = require('path');


// Database setup
require('./db.js');

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/../INFO30005/homepage.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log(`Express listening on port ${PORT}`);
});
