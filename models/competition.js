/* A competition is one day of events.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var comptitionSchema = new Schema({
	date: {
		type: Date,
		required: true
	}
	events: {
		[type: mongoose.Schema.Types.ObjectId,
        ref: 'Event']
	}
});


var Competition = mongoose.model('Competition', competitionSchema);
module.exports = Competition;