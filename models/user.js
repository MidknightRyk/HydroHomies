var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var defaultDP = mongoose.Types.ObjectId('5eb0ad6fed99d767a16b1f6a')
var userSchema = mongoose.Schema({
  username: String,
  email: String,
  hash: String,
  salt: String,
  location: String,
  lastVisit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fountain'
  },
  dateJoined: {
    type: Date,
    default: Date.now
  },
  displayPic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    default: defaultDP
  }
})

userSchema.methods.setPassword = function (password) {
  // asynchronously generate a secure password using 10 hashing rounds
  this.hash = bcrypt.hash(password, 10)
}

userSchema.methods.validatePassword = function (password) {
  const match = bcrypt.compare(password, this.hash)
  return match
}

mongoose.model('User', userSchema)
