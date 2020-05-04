var mongoose = require('mongoose');
var imageSchema = mongoose.Schema(
	{
		name: String,
		data: Buffer,
		contentType: String,
		usage: String
	}, {timestamps: true}
);

mongoose.model('Image', imageSchema);