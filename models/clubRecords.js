/* Club records are the best results in each event ever achieved at this club.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clubRecordSchema = new Schema({
	clubRecords: [{type: mongoose.Schema.Types.ObjectId,ref: 'Result'}]
});

var ClubRecords = mongoose.model('ClubRecords', clubRecordsSchema);

module.exports = ClubRecords;