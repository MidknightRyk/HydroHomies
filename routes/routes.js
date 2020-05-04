var express = require('express');
var router = express.Router();
var path = require('path
var loginController = require('../controllers/loginController.js');
var imageController = require('../controllers/imageController.js');

/* GET Requests */

// Get homepage
router.get('/', function (req, res) {
	if (!req.session.user) {
		res.sendFile(path.join(__dirname, '/../views/homepage/homepage.html'));
	} else {
		res.redirect('/main');
	}
  // dirname : It will resolve to your project folder.
});

/* POST requests */

// Login
router.post('/login', loginController.login);

// Logout
router.post('/logout', loginController.logout);

// Register
router.post('/register', loginController.register);


module.exports = router;  