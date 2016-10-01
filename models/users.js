/* User types are: Club Official, Age Manager, Parent and Athlete.
 * Users may be more than one type, for example a Club Official or
 * an Age Manager might be a Parent.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
// var deepPopulate = require('mongoose-deep-populate')(mongoose);

var User = new Schema({	
    username: String,
    password: String,
    OauthId: String,
    OauthToken: String,
    kind: {
		type: String,
		enum: ['CLUBOFFICIAL','AGEMANAGER','PARENT', 'ATHLETE'],
		required: true,
		default: 'ATHLETE'
	},
	name: {
        type: String,
        required: true,
		default: 'test'
	}, 
	address: String,
	phone: String,
	email: String,

	// Age Manager specific fields
	ageGroupManaged: String, // The age group they manage this season

	// Parent specific fields
	children: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],

	// Athlete specific fields
	parents: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	ageGroup: String, // The age group they are in this season
	athleteId: String, // Each athlete is assigned a special ID
	personalBests: [{eventName: String, distance: Number}]
});
	
User.plugin(passportLocalMongoose);
// User.plugin(deepPopulate, {
//   whitelist: [
//     'personalBests'
//   ]
// });
module.exports = mongoose.model('User', User);