var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Competition = require('../models/competition');
var Verify = require('./verify');

var compRouter = express.Router();
compRouter.use(bodyParser.json());

compRouter.route('/')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Competition.find({}).exec(function (err, comp) {
        if (err) return next(err);
        res.json(comp);
    });
})

.post(Verify.verifyOrdinaryUser, Verify.verifyClubOfficial, function (req, res, next) { 
 	Competition.create(req.body, function (err, comp) {
        if (err) throw err;
        console.log('Competition created!');
        var id = comp._id;
        res.json({"id":id});
    });
});

compRouter.route('/:id')
.get(Verify.verifyOrdinaryUser, function (req, res, next) {
    Competition.findOne({'_id':req.params.id}).populate('events').exec(function (err, comp) {
        if (err) return next(err);
        res.json(comp);
    });
})

module.exports = compRouter;