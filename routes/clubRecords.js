var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Results = require('../models/results');
var ClubRecord = Results.ClubRecord;
var Verify = require('./verify');

var clubRecordRouter = express.Router();
clubRecordRouter.use(bodyParser.json());

clubRecordRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    ClubRecord.find({}).exec(function (err, record) {
        if (err) return next(err);
        res.json(record);
    });
})

// Post a new record for an event which doesn't already have a record.
.post(Verify.verifyOrdinaryUser, Verify.verifyClubOfficial, function (req, res, next) {
    ClubRecord.create(req.body, function (err, result) {
        if (err) throw err;
        console.log('ClubRecord created!');
        var id = result._id;
        res.json({"id":id});
    });
});

clubRecordRouter.route('/:id')
// Update an existing record with a new result.
.put(Verify.verifyOrdinaryUser, Verify.verifyClubOfficial, function (req, res, next) {
    ClubRecord.findOne({'_id':req.params.id}, function (err, record){
     if (err) {
        res.send(422,'update failed');
     } else {
        //update fields
        for (var field in ClubRecord.schema.paths) {
           if ((field !== '_id') && (field !== '__v')) {
              if (req.record[field] !== undefined) {
                 record[field] = req.body[field];
              }  
           }  
        }  
        record.save();
        res.send(422,'update succeeded');
     }
  });
});

module.exports = clubRecordRouter;