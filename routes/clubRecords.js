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
        res.json(event);
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
})

// Update an existing record with a new result.
.put(Verify.verifyOrdinaryUser, Verify.verifyClubOfficial, function (req, res, next) {
    ClubRecord.find().exec(function (err, record) {
        if (err) return next(err);
        res.json(event);
    });
});

module.exports = clubRecordRouter;