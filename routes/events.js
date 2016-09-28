var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Event = require('../models/events');
var Verify = require('./verify');

var eventRouter = express.Router();
eventRouter.use(bodyParser.json());

eventRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Event.find({}).exec(function (err, event) {
        if (err) return next(err);
        res.json(event);
    });
});

eventRouter.route('/:id')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Event.find({'_id':req.params.id}).exec(function (err, event) {
        if (err) return next(err);
        res.json(event);
    });
});

eventRouter.route('/ageGroup/:ageGroup')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Event.find({'ageGroup':req.params.ageGroup}).exec(function (err, events) {
        if (err) return next(err);
        res.json(events);
    });
})

module.exports = eventRouter;