/* Results are based on the event type. 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var options = {discriminatorKey: 'kind'};

var resultSchema = new Schema({
	athlete: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
	},
	event: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
	},
	competition: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'Competiton'
	},
	distances: [Number], // Distance events typically give 3 attempts
    bestDistance: Number
}, options);

var Result = mongoose.model('Result', resultSchema);
var ClubRecord = mongoose.model('ClubRecord', resultSchema);

module.exports = {Result: Result, ClubRecord: ClubRecord};