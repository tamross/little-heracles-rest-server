/* Results are based on the event type. 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var deepPopulate = require('mongoose-deep-populate')(mongoose);

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
        ref: 'Competition'
	},
	distances: [Number], // Distance events typically give 3 attempts
    bestDistance: Number
}, options);

// resultSchema.plugin(deepPopulate, {
//   whitelist: [
//     'event'
//   ]
// });

var Result = mongoose.model('Result', resultSchema);
var ClubRecord = mongoose.model('ClubRecord', resultSchema);

module.exports = {Result: Result, ClubRecord: ClubRecord};