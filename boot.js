module.exports = function(app, db) {

var MongoDB = db;
var User = require('./models/users');
var Events = require('./models/events');

 console.log("Booting");

  Events.find({ kind: 'DISTANCE' }, function (err, events) {

  if (!events || events == '') {
    console.log("Creating events");
    Events.create([
        {
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u6"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u6"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u6"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u6"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u6"
        },
        {
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u7"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u7"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u7"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u7"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u7"
        },{
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u8"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u8"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u8"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u8"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u8"
        },
        {
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u9"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u9"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u9"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u9"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u9"
        },{
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u9"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u10"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u10"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u10"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u10"
        },
        {
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u11"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u11"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u11"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u11"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u11"
        },
        {
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u12"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u12"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u12"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u12"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u12"
        },
        {
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u13"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u13"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u13"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u13"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u13"
        },
        {
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u14"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u14"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u14"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u14"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u14"
        },
        {
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u15"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u15"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u15"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u15"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u15"
        },
        {
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u16"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u16"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u16"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u16"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u16"
        },
        {
            "kind": "DISTANCE",
            "name": "Discus",
            "ageGroup": "u17"
        },
        {
            "kind": "DISTANCE",
            "name": "Shotput",
            "ageGroup": "u17"
        },
        {
            "kind": "DISTANCE",
            "name": "Javelin",
            "ageGroup": "u17"
        },
        {
            "kind": "DISTANCE",
            "name": "Long Jump",
            "ageGroup": "u17"
        },
        {
            "kind": "DISTANCE",
            "name": "Triple Jump",
            "ageGroup": "u17"
        }
    ], function(err, events) {
   if (err) throw (err);
      });
    } else {
      // It would be good to do some checking here to make sure all of the events exist
    }
    });
  // });
};