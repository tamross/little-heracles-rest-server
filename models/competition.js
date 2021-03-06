/* A competition is one day of events.
 */

var mongoose = require('mongoose');
// require('mongoose-moment')(mongoose);
var Schema = mongoose.Schema;

var competitionSchema = new Schema({
	date: {
		type: Date,
		required: true
	},
	events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}]
});


var Competition = mongoose.model('Competition', competitionSchema);
module.exports = Competition;