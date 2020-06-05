// Code for reset functionality adapted from:
// http://sahatyalkabov.com/how-to-implement-password-reset-in-nodejs/

var mongoose = require("mongoose");
var User = mongoose.model("User");
var path = require("path");
var passport = require("passport");

// Registration function
var register = function(req, res) {
  // If email is not registered

  User.findOne({
    email: req.body.email
  }).then(function(user) {
    if (user) {
      req.flash("error", "That user already exists!");
      console.log("user exists");
      return res.send({ error: "That user already exists!" });
    } else {
      // If username is not taken
      User.findOne({
        username: req.body.name
      }).then(function(name) {
        if (name) {
          req.flash("error", "Username taken!");
          console.log("username taken");
          return res.send({ error: "Username taken!" });
        } else {
          // Create new user and redirect to awaiting approval page
          var user = new User({
            username: req.body.username,
            email: req.body.email
          });
          console.log(req.body);
          user.setPassword(req.body.pwd);
          return user.save().then(() => res.send("success"));
        }
      });
    }
  });
};

// Login function
var login = function(req, res) {
  passport.authenticate("user", (err, user, info) => {
    if (err) {
      console.log(err);
      return res.send({ error: err });
    }
    if (user) {
      console.log("logging in");
      return res.send({
        user: user._id,
        username: user.username,
        email: user.email,
        displayPic: user.displayPic,
        userType: "user"
      });
    } else {
      console.log(res);
      return res.send({ error: "error" });
    }
  });
};

// Retrieve profile
var profile = function(req, res) {
  var userID = req.session.user;
  User.findById(userID).exec((err, user) => {
    if (err) return console.log(err);

    res.sendFile(path.join(__dirname, "/../views/profile.html"), {
      //user: user,
      //lastVisit: user.lastVisit
    });
  });
};

// Logout function
var logout = function(req, res) {
  console.log("Logging out!");
  res.clearCookie("userID");
  res.redirect("/");
};

module.exports.login = login;
module.exports.register = register;
module.exports.profile = profile;
module.exports.logout = logout;
