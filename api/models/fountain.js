var mongoose = require('mongoose')
var fountainSchema = mongoose.Schema({
  name: String,
  // Stores the image object id
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  }],
  locationId: String,
  suburb: String,
  city: String,
  state: String,
  status: {
    type: String,
    /* possible status:
     * - available
     * - broken
     * - under repair
     * - inaccessible
     */
    default: 'available'
  },
  refill: {
    type: Boolean,
    default: false
  },
  lastVisit: {
    type: Date,
    default: null
  },
  tags: {
    type: [String],
    index: true
  }
})

mongoose.model('Fountain', fountainSchema, 'fountains')
