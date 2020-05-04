// Code for reset functionality adapted from:
// http://sahatyalkabov.com/how-to-implement-password-reset-in-nodejs/

var mongoose = require('mongoose');
var path = require('path');
var User = mongoose.model('User');
var Artifact = mongoose.model('Artifact');
var passport = require('passport');
var async = require('async');
var crypto = require('crypto');

// Registration function
var register = function (req, res) {
	// If email is not registered

	User.findOne({ email: req.body.email }).then(function (user) {
		if (user) {
			req.flash('error', 'That user already exists!');
			console.log('user exists');
			return res.redirect('back');
		} else {
			// If username is not taken
			User.findOne({username: req.body.name}).then(function (name) {
				if (name) {
					req.flash('error', 'Username taken!');
					console.log('username taken');
					return res.redirect('back');
				} else {
					// Create new user and redirect to awaiting approval page
					var user = new User({
						'name': req.body.name,
						'username': req.body.username,
						'email': req.body.email,
						'approved': false,
						'admin': false
					});
					user.setPassword(req.body.pwd);
					return user.save()
            .then(() => res.redirect('/u'));
				}
			});
		}
	});
};

// Login function
var login = function (req, res) {
	passport.authenticate('user', (err, user, info) => {
		if (err) {
			console.log(err);
			return res.redirect('/');
		}
		if (user) {
			if (user.approved) {
				// Keep user id and name in session storage
				req.session.user = user._id;
				req.session.userName = user.name;
				req.session.username = user.username;
				// Set user type
				req.session.userType = 'user';
				return res.redirect('/');
			}
		} else {
			return res.redirect('/');
		}
	})(req, res);
};

// Logout function
var logout = function (req, res) {
	console.log("'Logging out!'");
	req.session = null;
	res.redirect('/');
};

module.exports.login = login;
module.exports.register = register;
module.exports.logout = logout;