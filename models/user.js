var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var crypto = require("crypto");
var defaultDP = mongoose.Types.ObjectId("5eb0ad6fed99d767a16b1f6a");
var userSchema = mongoose.Schema({
  username: String,
  email: String,
  hash: String,
  salt: String,
  location: String,
  lastVisit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fountain"
  },
  dateJoined: {
    type: Date,
    default: Date.now
  },
  displayPic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    default: defaultDP
  }
});

userSchema.methods.validatePassword = function(password) {
  bcrypt.compare(password, this.hash, function(err, result) {
    if (err) console.log(err);
    return result;
  });
};

mongoose.model("User", userSchema);
