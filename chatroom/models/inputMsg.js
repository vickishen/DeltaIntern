var mongoose = require('mongoose');

var inputMsgSchema = new mongoose.Schema({
	name: String,
	completed: Boolean,
	note: String,
	update_at: { type: Date, default: Date.now},
});

module.exports = mongoose.model('inputMsg', inputMsgSchema);
