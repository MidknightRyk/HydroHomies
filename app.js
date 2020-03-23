var express = require('express');
var app = express();
var path = require('path');


// Database setup
require('./models/db.js');
require('./config/passport.js');

// Passport setup
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
//app.use(flash());

var routes = require('./routes/routes.js');

app.use('/', routes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log(`Express listening on port ${PORT}`);
});
