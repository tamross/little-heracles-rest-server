/* Event represents all of the currently supported event types. The Event collection
 * will be populated upon app startup and not frequently modified.
 * An event might be a distance event, for example discus or long jump, or a timed
 * event such as 400 m run.
 * Events have an age group associated with them - different age groups participate
 * in different events. This also helps with planning the competitions.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
	kind: {
		type: String,
		enum: ['TIMED','DISTANCE','HIGHJUMP'],
		required: true
	},
	name: {
		type: String,
		required: true
	}
	ageGroup: {
		type: String,
		required: true
	}
});


var Event = mongoose.model('Event', eventSchema);
module.exports = Event;