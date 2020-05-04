

// Retrive images from mongo
var getImage = function (req, res) {
	var cond = req.params.image;
	// Look for image by name
	Image.findOne({ 'name': cond }, function (err, image) {
		if (err) return console.log(err);
		if (image) {
			// Image found
			res.contentType(image.contentType);
			return res.send(image.data);
		};
	});

	/* this works but throws an error for some reason grr */

	// If not found look by ID
	Image.findOne({ '_id': cond }, function (err, img) {
		if (err) return console.log(err);
		res.contentType(img.contentType);
		res.send(img.data);
	});
};

module.exports.getImage = getImage;