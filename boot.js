module.exports = function(app, db) {

var MongoDB = db;
var User = require('./models/users');
var Events = require('./models/events');

 console.log("Booting");

  Events.find({ kind: 'TIMED' }, function (err, events) {

  if (!events || events == '') {
    console.log("Creating events");
    Events.create([
        {
            "kind": "TIMED",
            "name": "100m Run",
            "ageGroup": "u13"
        },
        {
            "kind": "TIMED",
            "name": "200m Run",
            "ageGroup": "u13"
        },
        {
            "kind": "TIMED",
            "name": "400m Run",
            "ageGroup": "u13"
        },
        {
            "kind": "TIMED",
            "name": "800m Run",
            "ageGroup": "u13"
        },
        {
            "kind": "TIMED",
            "name": "1500m Run",
            "ageGroup": "u13"
        },
        {
            "kind": "TIMED",
            "name": "800m Walk",
            "ageGroup": "u13"
        },
        {
            "kind": "TIMED",
            "name": "1500m Walk",
            "ageGroup": "u13"
        },
        {
            "kind": "TIMED",
            "name": "100m Hurdles",
            "ageGroup": "u13"
        },
        {
            "kind": "TIMED",
            "name": "200m Hurdles",
            "ageGroup": "u13"
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
            "kind": "HIGHJUMP",
            "name": "High Jump",
            "ageGroup": "u13"
        },
        {
            "kind": "TIMED",
            "name": "100m Run",
            "ageGroup": "u14"
        },
        {
            "kind": "TIMED",
            "name": "200m Run",
            "ageGroup": "u14"
        },
        {
            "kind": "TIMED",
            "name": "400m Run",
            "ageGroup": "u14"
        },
        {
            "kind": "TIMED",
            "name": "800m Run",
            "ageGroup": "u14"
        },
        {
            "kind": "TIMED",
            "name": "1500m Run",
            "ageGroup": "u14"
        },
        {
            "kind": "TIMED",
            "name": "800m Walk",
            "ageGroup": "u14"
        },
        {
            "kind": "TIMED",
            "name": "1500m Walk",
            "ageGroup": "u14"
        },
        {
            "kind": "TIMED",
            "name": "100m Hurdles",
            "ageGroup": "u14"
        },
        {
            "kind": "TIMED",
            "name": "200m Hurdles",
            "ageGroup": "u14"
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
            "kind": "HIGHJUMP",
            "name": "High Jump",
            "ageGroup": "u14"
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