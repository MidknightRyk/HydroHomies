var mongoose = require('mongoose')
var crypto = require('crypto')
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
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

userSchema.methods.validatePassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
  return this.hash === hash
}

mongoose.model('User', userSchema)
