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

userSchema.methods.setPassword = function(password) {
  this.hash = 0;
  var hashtmp;
  // asynchronously generate a secure password using 10 hashing rounds
  bcrypt.hash(password, 10, function(err, hash) {
    if (err)
      console.log(err);
    console.log(hash)
    hashtmp = hash;
    console.log("hshtmp", hashtmp);
  });
  console.log("hashtmp", hashtmp);
  this.hash = hashtmp;
  console.log("stored", this.hash);
};

validateHashPassword = function(password, salt, hash) {
  const check = crypto
    .pbkdf2Sync(password, salt, 10000, 512, "sha512")
    .toString("hex");
  return hash === check;
};

validateBytePassword = function(password, hash) {
  bcrypt.compare(password, hash, function(err, result) {
    if (err) console.log(err);
    return result;
  });
};

userSchema.methods.validatePassword = function(password) {
  return (match =
      validateBytePassword(password, this.hash) ||
      validateHashPassword(password, this.salt, this.hash)
      ? true
      : false);
};

mongoose.model("User", userSchema);
