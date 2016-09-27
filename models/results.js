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
	}
	competition: {
		type: mongoose.Schema.Types.ObjectId,
        ref: 'Competiton'
	}
}, options);

var Result = mongoose.model('Result', resultSchema);

// Times are in milliseconds. There may be multiple heats before the final race
var TimedResult = Result.discriminator('TimedResult', new mongoose.Schema({
	heatTimes: [Number], 
    finalTime: Number 
}, options));

var DistanceResult = Result.discriminator('DistanceResult',new mongoose.Schema({
    distances: [Number], // Distance events typically give 3 attempts
    bestDistance: Number
}, options));

// High jumpers have three attempts at each height
var highJumpAttemptSchema = new Shcema({
	height: Number,
	attemptOne: Boolean,
	attemptTwo: Boolean,
	attemptThree: Boolean
});

var HighJumpResult = Result.discriminator('HighJumpResult',new mongoose.Schema({
    results: [highJumpAttemptSchema], // A record of all of their attempts
    bestHeight: Number // The best height jump achieved in this competition
}, options));

module.exports = {
	Result: Result,
	TimedResult: TimedResult,
	DistanceResult: DistanceResult,
	HighJumpResult: HighJumpResult
};