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
  // asynchronously generate a secure password using 10 hashing rounds
  bcrypt.hash(password, 10, function(err, hash) {
    if (err) console.log(err);
    this.hash = hash;
  });
};

validateHashPassword = function(password, salt, hash) {
  const check = crypto
    .pbkdf2Sync(password, salt, 10000, 512, "sha512")
    .toString("hex");
  console.log("crypt =", check == hash);
  return hash === check;
};

validateBytePassword = function(password, hash) {
  bcrypt.compare(password, hash, function(err, result) {
    if (err) console.log(err);
    console.log(result);
    return result;
  });
};

userSchema.methods.validatePassword = function(password) {
  return (match =
    validateHashPassword(password, this.salt, this.hash) ||
    validateBytePassword(password, this.hash)
      ? true
      : false);
};

mongoose.model("User", userSchema);
